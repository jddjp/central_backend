module.exports = {
    apps : [
      {
        name: 'central_backend',
        cwd: '/var/www/central_backend',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
          PORT: 1380,
          DATABASE_HOST: '50.31.176.181', // database endpoint
          DATABASE_PORT: 3306,
          DATABASE_NAME: 'ecsxyfhy_ecsxyfhy_db-central', // DB name
          DATABASE_USERNAME: 'ecsxyfhy_centraladmin', // your username for psql
          DATABASE_PASSWORD: 'x=4XHVU3BLsW', // your password for psql
        },
      },
    ]
  };