DROP TABLE IF EXISTS  "story" CASCADE;

CREATE TABLE "story" (
  "id" SERIAL PRIMARY KEY,
  "type" TEXT,
  "displayText" TEXT,
  "combat" BOOLEAN DEFAULT false,
  "fromCombat" BOOLEAN DEFAULT false,
  "name" TEXT,
  "lastTavern" TEXT,
  "lastTown" TEXT,
  "desc" TEXT,
  "player" INT,
  "ap" INT,
  "turn" TEXT,
  "entities" INT[]
);