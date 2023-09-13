export default {
  install(server, options = {}) {
    if (process.env.NODE_ENV === 'production') {
      const adapter = server.getAdapter();
      server.use(require('compression')(options));
    }
  },
};
