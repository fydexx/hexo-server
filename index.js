var merge = require('utils-merge');

hexo.config.server = merge({
  port: 4000,
  log: false,
  ip: '0.0.0.0'
}, hexo.config.server);

hexo.extend.console.register('server', 'Start the server.', {
  desc: 'Start the server and watch for file changes.',
  options: [
    {name: '-i, --ip', desc: 'Override the default server IP. Bind to all IP address by default.'},
    {name: '-p, --port', desc: 'Override the default port.'},
    {name: '-s, --static', desc: 'Only serve static files.'},
    {name: '-l, --log [format]', desc: 'Enable logger. Override the logger format.'}
  ]
}, require('./lib/server'));

hexo.extend.filter.register('server_middleware', require('./lib/middlewares/logger'));
hexo.extend.filter.register('server_middleware', require('./lib/middlewares/header'));
hexo.extend.filter.register('server_middleware', require('./lib/middlewares/route'));
hexo.extend.filter.register('server_middleware', require('./lib/middlewares/static'));
hexo.extend.filter.register('server_middleware', require('./lib/middlewares/redirect'));
hexo.extend.filter.register('server_middleware', require('./lib/middlewares/gzip'));