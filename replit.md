# Overview

This project is a Discord-style bot management dashboard for Transformice, a web-based game. The application provides a comprehensive interface for managing bot configurations (including Transformice login credentials), welcome messages, custom commands, activity logs, and statistics. It features a modern React frontend with shadcn/ui components and an Express.js backend with in-memory storage for development.

# User Preferences

Preferred communication style: Simple, everyday language.
User request: Interface em português, bot deve ficar online 24/7
User request: Campos específicos para inserir nick e senha da conta do Transformice
Note: Usuário quer saber especificamente onde inserir as credenciais do Transformice (na página de Settings/Configurações)
Recent Change (2025-01-20): Implemented complete bot management system with advanced simulation. Due to Replit's TCP restrictions, bot validates real credentials and simulates Transformice connection locally. Interface is fully functional for testing/configuration. For real game connection, deployment to VPS/dedicated server is required where TCP connections to Transformice servers are allowed.

# System Architecture

## Frontend Architecture
The frontend is built with React 18 using Vite as the build tool. The application follows a component-based architecture with:
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with a dark theme design system using CSS custom properties
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod schema validation for type-safe form management
- **Real-time Updates**: WebSocket integration for live bot status and activity monitoring

## Backend Architecture
The backend uses Express.js with TypeScript following a RESTful API design:
- **API Routes**: Organized around bot configuration, welcome messages, commands, activity logs, and statistics
- **Middleware**: Custom logging middleware for API request monitoring
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **WebSocket Support**: Real-time communication for bot status updates and activity streaming
- **Development Setup**: Vite integration for hot module replacement during development

## Database Design
Uses PostgreSQL with Drizzle ORM for type-safe database operations:
- **Schema Definition**: Centralized schema in shared directory with Zod validation
- **Tables**: Bot configs, welcome messages, commands, activity logs, and statistics
- **Data Validation**: Integration between Drizzle schema and Zod for consistent validation
- **Migrations**: Drizzle Kit for database schema migrations

## Bot Service Integration
Custom bot service layer that interfaces with the Transformice game:
- **Connection Management**: Handles bot connection lifecycle with automatic reconnection
- **Real-time Communication**: WebSocket broadcasting for status updates and events
- **Activity Logging**: Comprehensive logging of user joins, command usage, and bot events
- **Statistics Tracking**: Real-time metrics collection for bot usage and performance

## Development Environment
Configured for modern development practices:
- **TypeScript**: Full type safety across frontend, backend, and shared code
- **Path Aliases**: Configured import paths for cleaner code organization
- **Hot Reload**: Vite development server with Express middleware integration
- **Code Quality**: ESLint and TypeScript compiler checking

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database using `@neondatabase/serverless` driver
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Connection Pooling**: Built-in connection management through Neon's serverless driver

## UI Components
- **Radix UI**: Comprehensive set of accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind
- **Lucide Icons**: Modern icon library for consistent iconography

## Development Tools
- **Vite**: Fast build tool with development server and hot module replacement
- **Replit Integration**: Custom plugins for Replit development environment support
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins

## Real-time Features
- **WebSocket**: Native WebSocket support for real-time bot communication
- **TanStack Query**: Advanced caching and synchronization for server state

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

## Game Integration
- **Transformice Protocol**: Custom integration with Transformice game servers for bot functionality