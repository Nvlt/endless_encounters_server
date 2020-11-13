TRUNCATE
  "user"
  RESTART IDENTITY CASCADE;

INSERT INTO "user" ( "username", "password", "email","entity","access_token")
VALUES
  (
    'admin',
    --"password" at 12
    '$2a$12$wTknGEe.NxdMZO.EK17gXOv8B1k7kXWjqhsZLUi36jeiwxbCDACJ6',
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
        ARRAY['fire ball','flee'],
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
        ARRAY['fire ball','flee'],
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
        
