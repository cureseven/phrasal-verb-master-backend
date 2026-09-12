# API Specification

## 1. AUTHENTICATION (Auth)

POST /api/auth/signup
- Description : User registration
- Request Body:
  {
    "email": "user@example.com",
    "password": "securepassword123"
  }
- Response (201 Created):
  {
    "id": "uuid-string",
    "email": "user@example.com"
  }

POST /api/auth/login
- Description : User login (Issues JWT Cookie)
- Request Body:
  {
    "email": "user@example.com",
    "password": "securepassword123"
  }
- Response (200 OK):
  {
    "message": "Login successful"
  }

POST /api/auth/logout
- Description : User logout
- Response (200 OK):
  {
    "message": "Logged out successfully"
  }


## 2. PHRASAL VERBS (Master Data)

GET /api/verbs
- Description : Get list of phrasal verbs
- Query Params:
  - verb     : Filter by verb (e.g. "take")
  - particle : Filter by particle (e.g. "off")
  - status   : Filter by status ("memorized" | "review_needed")
- Response (200 OK):
  [
    {
      "id": "uuid-1",
      "verb": "take",
      "particle": "off",
      "meaningJa": "離陸する、脱ぐ",
      "exampleSentence": "The plane took off."
    }
  ]

GET /api/verbs/:id
- Description : Get detail of a specific phrasal verb
- Response (200 OK):
  {
    "id": "uuid-1",
    "verb": "take",
    "particle": "off",
    "meaningJa": "離陸する、脱ぐ",
    "exampleSentence": "The plane took off."
  }


## 3. QUIZ SYSTEM (Quiz)

GET /api/quiz/next
- Description : Generate next quiz question based on weighted algorithm
- Query Params:
  - lastMode : "verb_fixed" | "particle_fixed"
  - lastWord : string (e.g. "take")
- Internal Logic:
  - 70% chance to maintain lastMode, 30% chance to switch.
- Response (200 OK):
  {
    "currentMode": "verb_fixed",
    "fixedWord": "take",
    "question": "take ____ (意味: 離陸する、脱ぐ)",
    "correctAnswer": "off",
    "options": ["off", "on", "up", "away"]
  }


## 4. USER PROGRESS (User Progress - Auth Required)

POST /api/progress/mark
- Description : Update learning status of a phrasal verb
- Request Body:
  {
    "phrasalVerbId": "uuid-1",
    "status": "memorized"
  }
- Response (200 OK):
  {
    "id": "status-uuid",
    "userId": "user-uuid",
    "phrasalVerbId": "uuid-1",
    "status": "memorized",
    "updatedAt": "2026-09-12T15:00:00.000Z"
  }

GET /api/progress/summary
- Description : Get overall progress metrics for authenticated user
- Response (200 OK):
  {
    "totalVerbs": 100,
    "memorizedCount": 45,
    "reviewNeededCount": 20,
    "unlearnedCount": 35,
    "progressPercentage": 45.0
  }