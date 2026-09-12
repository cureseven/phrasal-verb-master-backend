# Database Specification (PostgreSQL / Prisma)

## 1. DATA MODEL OVERVIEW

```
[User] 1 <---> * [UserPhrasalVerbStatus] * <---> 1 [PhrasalVerb]
```

## 2. TABLE DEFINITIONS

### phrasal_verbs (Master Data)

- id               : UUID (Primary Key)
- verb             : String (NOT NULL) - e.g. "take"
- particle         : String (NOT NULL) - e.g. "off"
- meaning_ja       : String (NOT NULL) - e.g. "離陸する、脱ぐ"
- example_sentence : String (NOT NULL) - e.g. "The plane took off."
- created_at       : DateTime (DEFAULT: now())

### users (User Info)

- id            : UUID (Primary Key)
- email         : String (UNIQUE, NOT NULL)
- password_hash : String (NOT NULL)
- created_at    : DateTime (DEFAULT: now())

### user_phrasal_verb_statuses (Learning Status)

- id              : UUID (Primary Key)
- user_id         : UUID (Foreign Key -> users.id)
- phrasal_verb_id : UUID (Foreign Key -> phrasal_verbs.id)
- status          : ENUM ('memorized', 'review_needed')
- updated_at      : DateTime (UpdatedAt)

* Unique Constraint: UNIQUE(user_id, phrasal_verb_id)


## 3. COMMANDS

- Run Migration : npx prisma migrate dev --name init
- Seed Data     : npx prisma db seed