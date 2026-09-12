# Phrasal Verb Master Backend

## 1. OVERVIEW

Phrasal verb learning application backend API server built with 3-tier 
architecture (Express, TypeScript, PostgreSQL, Prisma).


## 2. QUICK START

1) Install Dependencies
   $ npm install

2) Configure Environment Variables
   Create .env file in root:
   PORT=3001
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/phrasal_verb_db?schema=public"

3) Start PostgreSQL Container
   $ docker compose up -d

4) Run Migration & Seed Data
   $ npx prisma migrate dev --name init
   $ npx prisma db seed

5) Start Development Server
   $ npm run dev

   - API Base URL : http://localhost:3001
   - Health Check : http://localhost:3001/health
   - DB Check     : http://localhost:3001/dbhealth


## 3. DOCUMENTATION

Detailed specifications are stored in the docs/ directory:

- docs/api.txt          : API endpoints and request/response specifications
- docs/database.txt     : Database schema, ER diagram, and table structures
- docs/architecture.txt : 3-tier architecture rules and folder structure

## 4. DATABASE SETUP & SEEDING

To update or repopulate the database with phrasal verbs:

1) Update Seed File

Edit `prisma/seed.ts` to add or modify items in the `phrasalVerbsData` array.

2) Run Seed Command

Execute the seed script to reset and repopulate the database:
```
$ npx prisma db seed
```