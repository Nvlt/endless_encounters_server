TRUNCATE
  "user"
  RESTART IDENTITY CASCADE;

INSERT INTO "user" ("id", "username", "password", "email","entity","access_token")
VALUES
  (
    1,
    'admin',
    --"password" at 12
    '$2a$12$AiFoZ50xR4kpUbYRcHyM9e1ii5J62Y6V2nasWvhO2KPD3MBNaRDam',
    'dunder@endless.com',
    1,
    '252f1ad8-da83-4366-9a8b-84259bcb1894'
  );

TRUNCATE
  "story"
  RESTART IDENTITY CASCADE;

INSERT INTO "story" (
                    "type",
                    "displayText",
                    "combat",
                    "fromCombat",
                    "name",
                    "lastTavern",
                    "lastTown",
                    "desc",
                    "choices",
                    "player",
                    "ap",
                    "turn",
                    "entities")
VALUES
  (
  'town',
  'Welcome to the town of blaahhh',
  FALSE,
  FALSE,
  'blaahhh',
  'the broken blah',
  'blaahhh',
  'a boring place',
  ARRAY['explore', 'tavern'],
  1,
  10,
  'player',
  ARRAY[2]);

TRUNCATE
  "entity"
  RESTART IDENTITY CASCADE;

  INSERT INTO "entity" (
                    "type",
                    "name",
                    "desc",
                    "abilities",
                    "stats",
                    "job",
                    "level",
                    "speechType",
                    "statPoints",
                    "exp",
                    "max_exp",
                    "hp",
                    "max_hp",
                    "mp",
                    "max_mp",
                    "current_event",
                    "hostility")
  VALUES(
        'player',
        'v',
        'a cat',
        ARRAY['Fire Ball','flee'],
        ARRAY[1,2,3,4,5,6,7],
        'Mage',
        50,
        'basic',
        0,
        0,
        1000,
        50,
        150,
        300,
        300,
        1,
        FALSE),
        (
        'basic',
        'bob',
        'a cat',
        ARRAY['Fire Ball','flee'],
        ARRAY[1,2,3,4,5,6,7],
        'Warrior',
        50,
        'basic',
        0,
        0,
        1000,
        50,
        150,
        300,
        300,
        1,
        TRUE)
        
