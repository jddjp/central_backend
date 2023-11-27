

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  //cron:{
  //  enabled: true,
  //  tasks: {
  //   '* * */23 * * *': async ({strapi}) =>{
  //      console.log('Inicia CRON JOB ------------------');
  //      const entry = await strapi.entityService.findMany('api::historial-numero.historial-numero');
  //      entry.map((element) => {
  //        //FECHA DE REGISTRO + 7 DIAS
  //        var dateLine = new Date(element.createdAt);
  //        dateLine.setDate(dateLine.getDate() + 7)
  //        if (new Date() >= dateLine ) {
  //          async () => {
  //            await strapi.entityService.delete('api::historial-numero.historial-numero', element.id);
  //            console.log(element.id, ' -ID Registro Eliminado.....');
  //          }
  //        }
  //      });
  //      console.log('Proceso terminado ------------------');
  //    }
  //  }
  //},
  app: {
    keys: env.array("APP_KEYS"),
  },
});
