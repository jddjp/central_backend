module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '35.202.172.100'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'db-central'),
      user: env('DATABASE_USERNAME', 'centraladmin'),
      password: env('DATABASE_PASSWORD', '336699@Db'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
