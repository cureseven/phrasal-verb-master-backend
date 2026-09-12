# Architecture Specification

## 1. ARCHITECTURE OVERVIEW

This project adopts a 3-Tier Architecture for separation of concerns
and easy testability.

[ Client Request ]
       │
       ▼
┌──────────────┐
│    Routes    │  HTTP Endpoints & Middleware binding
└──────────────┘
       │
       ▼
┌──────────────┐
│ Controllers  │  Request Validation & Response Formatting
└──────────────┘
       │
       ▼
┌──────────────┐
│   Services   │  Business Logic & Quiz Generation Algorithm
└──────────────┘
       │
       ▼
┌──────────────┐
│ Prisma Client│  Database Access (PostgreSQL)
└──────────────┘


## 2. DIRECTORY STRUCTURE & RESPONSIBILITIES

src/
├── controllers/    # Controller Layer
├── lib/            # Singleton utilities (Prisma Client, etc.)
├── middlewares/    # Express Middlewares (Auth, Error Handler)
├── routes/         # Route Layer
├── services/       # Service Layer
└── index.ts        # Entry point

■ Route Layer (src/routes/)
- Defines URI paths and HTTP methods (GET, POST, etc.).
- Binds routes to specific Controller methods.
- Strictly NO business logic or validation code.

■ Controller Layer (src/controllers/)
- Receives Express Request (req.params, req.query, req.body).
- Handles input validation.
- Calls Service methods and sends HTTP response (Status Code + JSON).

■ Service Layer (src/services/)
- Pure TypeScript methods/classes with NO dependency on Express req/res.
- Implements core business logic (e.g. 70/30 mode retention logic).
- Handles DB access via Prisma Client.