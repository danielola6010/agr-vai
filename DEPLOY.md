# Deploy Gratuito - Bot Online no Transformice

## Passo a Passo - Render.com (100% Gratuito)

### 1. Preparar GitHub
- Vá no GitHub e crie um novo repositório 
- Faça upload de TODOS os arquivos deste projeto Replit

### 2. Configurar Render
1. **Entre no Render**: https://render.com
2. **Conecte GitHub** (já fez ✅)
3. **Clique "New Web Service"**
4. **Selecione seu repositório do bot**

### 3. Configurações do Deploy:
```
Name: transformice-bot
Environment: Node
Build Command: npm install && npm run build
Start Command: npm start
```

### 4. Variáveis de Ambiente:
Clique em "Advanced" e adicione:
```
NODE_ENV=production
PORT=10000
```

### 5. Deploy
- Clique "Create Web Service"
- Aguarde build (3-5 minutos)
- Receberá URL: `https://transformice-bot-xyz.onrender.com`

## ⚠️ Se o Deploy Ficar "Carregando" ou "Quase no Ar":

### Problema Comum: Configurações Erradas
1. **Vá nas configurações do seu serviço no Render**
2. **Mude as configurações para:**
   - **Build Command**: `npm run build` 
   - **Start Command**: `npm start`
   - **Port**: `10000`

### Como Corrigir:
1. **No Render, clique no seu serviço**
2. **Vá em "Settings"**
3. **Scroll até "Build & Deploy"**
4. **Mude:**
   - Build Command: `npm run build`
   - Start Command: `npm start`
5. **Em Environment, adicione:**
   - `PORT=10000`
6. **Clique "Manual Deploy" → "Deploy Latest Commit"**

### Se Ainda Não Funcionar:
- **Vá em "Logs"** no Render para ver o erro específico
- **Pode ser que precise esperar até 10 minutos** no tier gratuito

### Vantagens do Render:
- ✅ Totalmente gratuito
- ✅ Conexões TCP permitidas
- ✅ Bot aparecerá online no Transformice
- ✅ SSL automático
- ⚠️ Dorme após 15 min sem uso (normal em tier gratuito)

## Opção 2: Fly.io - Também gratuito

1. **Instalar Fly CLI:**
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. **Login e deploy:**
   ```bash
   fly auth login
   fly launch
   ```

## Opção 3: Railway - Pago ($5/mês)

Se quiser garantia 24/7 sem dormir:
- Custa $5/mês
- Bot sempre online
- Melhor performance

---

## Após Deploy

1. **Acesse sua URL do Render**
2. **Configure suas credenciais do Transformice**
3. **Bot aparecerá online no jogo!**

## Limitação atual (Replit):
- No Replit: apenas simulação (não aparece no jogo)
- No Render: conexão real (aparece online no Transformice)

Quer que eu te ajude com o deploy no Render agora?