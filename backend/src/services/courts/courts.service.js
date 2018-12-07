// Initializes the `courts` service on path `/courts`
const createService = require('feathers-knex');
const createModel = require('../../models/courts.model');
const hooks = require('./courts.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'courts',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/courts', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('courts');

  service.hooks(hooks);
};
  