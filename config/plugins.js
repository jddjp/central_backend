//  path: config/plugins.js

module.exports = ({ env }) => ({
  // ...
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET')
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('EMAIL_SMTP_HOST', 'smtp.gmail.com'),
        port: env('EMAIL_SMTP_PORT', 587),
        secure: false,
        auth: {
          user: env('EMAIL_SMTP_USER', 'david.djp.developer@gmail.com'),
          pass: env('EMAIL_SMTP_PASS', 'ikzs stze mewc stei'),
        },
      },
      settings: {
        defaultFrom: 'david.djp.developer@gmail.com',
        defaultReplyTo: 'david.djp.developer@gmail.com',
      },
    }
  },
  // ...
});

