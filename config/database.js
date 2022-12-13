module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '50.31.176.181'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'ecsxyfhy_ecsxyfhy_db-central'),
      user: env('DATABASE_USERNAME', 'ecsxyfhy_centraladmin'),
      password: env('DATABASE_PASSWORD', 'x=4XHVU3BLsW'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});