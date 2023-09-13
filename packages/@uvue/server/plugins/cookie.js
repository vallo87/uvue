import merge from 'lodash/merge';

export default {
  install(server, options = {}) {
    const { secret, options: opts } = merge(
      {},
      {
        secret: '',
        options: {},
      },
      options,
    );

    if (!secret) {
      console.warn('No secret defined for your cookies!');
    }

    const adapter = server.getAdapter();
    server.use(require('cookie-parser')(secret, opts));
  },
};
