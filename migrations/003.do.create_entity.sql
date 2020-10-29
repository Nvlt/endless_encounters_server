DROP TABLE IF EXISTS  "entity" CASCADE;

CREATE TABLE "entity" (
  "id" SERIAL PRIMARY KEY,
  "type" TEXT,
  "name" TEXT,
  "desc" TEXT,
  "abilities" TEXT[],
  "stats" INT[],
  "job" TEXT,
  "level" INT,
  "speechType" TEXT,
  "statPoints" INT,
  "exp" INT,
  "hp" INT,
  "max_hp" INT,
  "mp" INT,
  "current_event" INT,
  "hostility" BOOLEAN);