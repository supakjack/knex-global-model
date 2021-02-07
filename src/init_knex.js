module.exports = (
  KNEX_HOST,
  KNEX_CLIENT,
  KNEX_USER,
  KNEX_PASSWORD,
  KNEX_DATABASE,
  KNEX_PORT
) => {
  return require('knex')({
    client: KNEX_CLIENT,
    connection: {
      host: KNEX_HOST,
      user: KNEX_USER,
      password: KNEX_PASSWORD,
      database: KNEX_DATABASE,
      port: KNEX_PORT
    }
  })
}
