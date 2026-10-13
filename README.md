# Doné

**Doné** — gift list ("cagnotte") and celebration website platform for weddings and other occasions, built for Mauritius and its diaspora.

Status: **prototype in progress, test mode only — no real payments.** Product decisions live in [SPEC.md](SPEC.md).

## Run it locally

Requirements: Node.js 22+, PostgreSQL 16.

```bash
# 1. Database (once)
createuser --createdb --pwprompt done      # password: done
createdb -O done done_dev
createdb -O done done_test

# 2. App
cp .env.example .env
npm install                                 # also generates the Prisma client
npm run db:migrate                          # apply migrations to done_dev
npm run dev                                 # http://localhost:3000
```

## Everyday commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run check` | Lint + typecheck + unit tests (run before every push) |
| `npm test` | Unit tests (Vitest) |
| `npm run build` | Production build |
| `npm run db:migrate` | Create/apply a migration after editing `prisma/schema.prisma` |
| `npm run db:reset` | Drop and recreate the dev database |

## Where things are

```
prisma/schema.prisma     data model (money = integer cents + currency)
src/app/                 pages (Next.js App Router)
src/components/          shared UI in the Doné style
src/lib/fees.ts          service-fee maths (who pays, what hosts receive)
src/lib/money.ts         parsing and formatting amounts
src/lib/i18n/            translations helper (cookie → browser language → English)
src/messages/{en,fr}.json  all UI text — add kr.json later for Kreol
tests/unit/              Vitest tests
```

Translations: every UI string lives in `src/messages/*.json`; a test fails if French and English keys drift apart.
