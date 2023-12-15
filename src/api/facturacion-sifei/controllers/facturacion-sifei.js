'use strict';

/**
 * A set of functions called "actions" for `facturacion-sifei`
 */

module.exports = {
  async generarFacturaElec(ctx, next) {
    const body = ctx.request.body;
    const dataEmisor = await strapi
        .service("api::facturacion-sifei.facturacion-sifei")
        .getDataEmisor(body.id_sucursal);

        
    const emisor = {
      emisor: {
        "rfc": dataEmisor.rfc_emisor,
        "nombre": dataEmisor.nombre_fiscal_emisor,
        "regimen_fiscal": dataEmisor.regimen_fiscal_emisor
      }
    }

    const configuracion = {
      configuracion:
      {
        "validador": {
          "valida_xml": true,
          "valida_timbre": false
        },
        "csd": {
          "cer": dataEmisor.certificado_facturacion,
          "key": dataEmisor.key_facturacion,
          "clave":dataEmisor.clave_facturacion
        }
      }
    }
    try {
      const body = ctx.request.body;
      Object.assign(body.comprobante, emisor);
      Object.assign(body, configuracion);

      body.comprobante.lugar_expedicion = dataEmisor.codigo_postal;

      const getTokenSIFEI = await strapi
        .service("api::facturacion-sifei.facturacion-sifei")
        .getTokenSIFEI(dataEmisor.user_sifei, dataEmisor.password_sifei);
      console.log("Token obtenido....");

      if (getTokenSIFEI.error != "") {
        ctx.body = {
          status: getTokenSIFEI.error,
          xmlBase64: "",
          pdfBase64: ""
        };
        return
      }

      const getXML = await strapi
        .service("api::facturacion-sifei.facturacion-sifei")
        .getXML(getTokenSIFEI.token, body);
      console.log("XML obtenido....");
      if (getXML.error != "") {
        ctx.body = {
          status: getXML.error,
          xmlBase64: "",
          pdfBase64: ""
        };
        return
      }
      //console.log(getXML);

      const getCFDI = await strapi
        .service("api::facturacion-sifei.facturacion-sifei")
        .generarFacturaElec(getXML.xmlBase64, dataEmisor.user_sifei, dataEmisor.password_soap_sifei, dataEmisor.id_equipo_sifei);
      console.log("Cfdi obtenido....");
      if (getCFDI.error != "") {
        ctx.body = {
          status: getCFDI.error,
          xmlBase64: "",
          pdfBase64: ""
        };
        return
      }

      const getPDF = await strapi
        .service("api::facturacion-sifei.facturacion-sifei")
        .generatePDF(dataEmisor.token_sifei_pdf, getCFDI.xmlBase64);
      console.log("GetPDF obtenido....");
      if (getPDF.error != "") {
        ctx.body = {
          status: getPDF.error,
          xmlBase64: "",
          pdfBase64: ""
        };
        return
      }

      //console.log("---------------------");
      //console.log(getPDF);
     // console.log("---------------------");

      const saveInvoice = await strapi
        .service("api::facturacion-sifei.facturacion-sifei")
        .saveInvoice({
          uso_cfdi:  getPDF.uuid,
          xml: getCFDI.xmlBase64,
          pdf: getPDF.pdfBase64,
          pedido: body.id_pedido,
          cliente: body.id_client,
        });

      const sendInvoice = await strapi
        .service("api::facturacion-sifei.facturacion-sifei")
        .sendInvoice(getCFDI.xmlBase64, getPDF.pdfBase64, getPDF.uuid, body.email);
      ctx.body = {
        status: "OK"
      };
      //console.log("---------------------");
      //console.log(saveInvoice);
      //console.log("---------------------");
      ctx.body = {
        status: "OK",
        xmlBase64: getCFDI.xmlBase64,
        pdfBase64: getPDF.pdfBase64,
        factura_id: saveInvoice.id
      };
    } catch (err) {
      console.log(err);
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
