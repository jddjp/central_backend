module.exports = {
  routes: [
     {
      method: 'POST',
      path: '/facturacion-sifei',
      handler: 'facturacion-sifei.generarFacturaElec',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
