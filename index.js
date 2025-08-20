import express from 'express';
import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 10000;

// Middleware
app.use(express.json());
app.use(express.static('dist/public'));

// In-memory storage for bot config
let botConfig = {
  id: '1',
  username: '',
  password: '',
  isActive: false
};

let botStatus = {
  isConnected: false,
  lastSeen: null,
  tribeName: 'Aguardando configuração'
};

// Simulate Transformice connection
function simulateTransformiceConnection() {
  if (!botConfig.username || !botConfig.password) {
    console.log('Credenciais não configuradas');
    return;
  }
  
  console.log(`Bot conectando ao Transformice com usuário: ${botConfig.username}`);
  botStatus.isConnected = true;
  botStatus.lastSeen = new Date().toISOString();
  botStatus.tribeName = 'Conectado - TCP direto';
  
  // Broadcast to all WebSocket clients
  wss.clients.forEach(client => {
    if (client.readyState === 1) { // WebSocket.OPEN
      client.send(JSON.stringify({
        type: 'bot_status',
        data: botStatus
      }));
    }
  });
}

// API Routes
app.get('/api/bot/config', (req, res) => {
  res.json(botConfig);
});

app.post('/api/bot/config', (req, res) => {
  const { username, password, isActive } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username e password são obrigatórios' });
  }
  
  botConfig = { ...botConfig, username, password, isActive };
  
  if (isActive) {
    simulateTransformiceConnection();
  }
  
  console.log(`Configuração salva para usuário: ${username}`);
  res.json({ success: true, message: 'Bot configurado com sucesso!' });
});

app.get('/api/bot/status', (req, res) => {
  res.json(botStatus);
});

// Create HTTP server
const server = createServer(app);

// Create WebSocket server
const wss = new WebSocketServer({ server, path: '/ws' });

wss.on('connection', (ws) => {
  console.log('Nova conexão WebSocket estabelecida');
  
  // Send current bot status
  ws.send(JSON.stringify({
    type: 'bot_status',
    data: botStatus
  }));
  
  ws.on('close', () => {
    console.log('Conexão WebSocket fechada');
  });
});

// Start server
server.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`WebSocket disponível em /ws`);
  
  // Try to connect bot if already configured
  if (botConfig.isActive && botConfig.username && botConfig.password) {
    simulateTransformiceConnection();
  }
});
