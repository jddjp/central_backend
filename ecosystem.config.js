module.exports = {
  apps : [
    {
      name: 'central_backend',
      cwd: '/home/ubuntu/central_backend',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 1380,
        DATABASE_HOST: 'strapi-databasec.c1gio5ccujns.us-east-1.rds.amazonaws.com', // database endpoint
        DATABASE_PORT: 3306,
        DATABASE_NAME: 'comercializadora1', // DB name
        DATABASE_USERNAME: 'admin', // your username for psql
        DATABASE_PASSWORD: 'AdminUxenRoot', // your password for psql
      },
    },
  ]
};
