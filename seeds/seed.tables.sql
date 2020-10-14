BEGIN;

TRUNCATE
  "user"
  RESTART IDENTITY CASCADE;

INSERT INTO "user" ("id", "username", "password", "email")
VALUES
  (
    1,
    'admin',
    --"password" at 12
    '$2a$12$AiFoZ50xR4kpUbYRcHyM9e1ii5J62Y6V2nasWvhO2KPD3MBNaRDam',
    'dunder@endless.com'
  );

SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));

COMMIT;