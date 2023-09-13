import merge from 'lodash/merge';

export default {
  install(server, pluginOptions = {}) {
    const { options: opts, directory } = merge(
      {},
      {
        directory: 'dist',
        options: {
          dotfiles: 'ignore',
          immutable: true,
          maxAge: '30d',
          setHeaders(res, path) {
            if (/service-worker\.js/.test(path)) {
              res.setHeader('Cache-Control', 'public, max-age=0');
            }
          },
        },
      },
      pluginOptions,
    );

    server.use(require('serve-static')(directory, opts));
  },
};
