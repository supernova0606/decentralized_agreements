const routes = require('next-routes')();

routes
  .add('/brds/new', '/brds/new')
  .add('/brds/:address', '/brds/show')
  .add('/brds/:address/requests', '/brds/requests/index')
  .add('/brds/:address/requests/new', '/brds/requests/new');

module.exports = routes;
