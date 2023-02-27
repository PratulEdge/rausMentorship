const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://prep.edgecanvas.com',
      changeOrigin: true,
    })
  );
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'http://prep.edgecanvas.com',
      changeOrigin: true,
      pathRewrite: {
        '/proxy': '/',
      },
    })
  );
};

