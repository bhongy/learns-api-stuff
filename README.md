```shell
yarn && cp .env.example .env
```

Edit `.env` file for environment specific configurations if needed.

Start Development
```shell
yarn start
```

Stop Development
```shell
yarn stop
```

Useful PM2 commands
```shell
yarn pm2 list # see all running processes
yarn pm2 logs 0 # see logs
yarn pm2 monit # monitor CPU & Memory usage
```
