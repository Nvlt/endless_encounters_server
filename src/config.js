module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: (process.env.NODE_ENV === 'test') ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL || 'postgresql://v:mew@localhost/endless-encounters',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://v:mew@localhost/test-endless-encounters',
  JWT_SECRET: process.env.JWT_SECRET || 'secret-jwt'
}