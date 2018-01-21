module.exports = {
  apps: [
    {
      script: 'index.js',
      watch: ['index.js'],
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
