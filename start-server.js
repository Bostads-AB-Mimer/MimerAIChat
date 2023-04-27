const dotenv = require('dotenv');
const pm2 = require('pm2');

// Load environment variables
dotenv.config();

pm2.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  pm2.start(
    {
      script: 'serve',
      interpreter: 'none',
      args: ['-s', '/home/site/wwwroot/build', '--no-daemon', '--spa'],
      env: {
        ...process.env,
      },
    },
    (err, apps) => {
      pm2.disconnect(); // Disconnects from PM2
      if (err) {
        console.error(err);
        process.exit(2);
      }
    }
  );
});
