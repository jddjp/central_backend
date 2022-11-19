module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '75.102.22.121'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'zythqgnc_ComercializadoraSanJoseProd'),
      user: env('DATABASE_USERNAME', 'zythqgnc_centraladmin'),
      password: env('DATABASE_PASSWORD', 'x=4XHVU3BLsW'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});