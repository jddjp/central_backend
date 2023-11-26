'use strict';

/**
 * A set of functions called "actions" for `facturacion-sifei`
 */

module.exports = {
  async generarFacturaElec(ctx, next) {
    const emisor = {
      emisor: {
        "rfc": "H&E951128469",
        "nombre": "HERRERIA & ELECTRICOS SA DE CV",
        "regimen_fiscal": "601"
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
          "cer": "MIIFrTCCA5WgAwIBAgIUMzAwMDEwMDAwMDA1MDAwMDM0MzEwDQYJKoZIhvcNAQELBQAwggErMQ8wDQYDVQQDDAZBQyBVQVQxLjAsBgNVBAoMJVNFUlZJQ0lPIERFIEFETUlOSVNUUkFDSU9OIFRSSUJVVEFSSUExGjAYBgNVBAsMEVNBVC1JRVMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlvc2Nhci5tYXJ0aW5lekBzYXQuZ29iLm14MR0wGwYDVQQJDBQzcmEgY2VycmFkYSBkZSBjYWxpejEOMAwGA1UEEQwFMDYzNzAxCzAJBgNVBAYTAk1YMRkwFwYDVQQIDBBDSVVEQUQgREUgTUVYSUNPMREwDwYDVQQHDAhDT1lPQUNBTjERMA8GA1UELRMIMi41LjQuNDUxJTAjBgkqhkiG9w0BCQITFnJlc3BvbnNhYmxlOiBBQ0RNQS1TQVQwHhcNMjMwNTE4MTI0MjE0WhcNMjcwNTE4MTI0MjE0WjCB1DEmMCQGA1UEAxQdSEVSUkVSSUEgJiBFTEVDVFJJQ09TIFMgREUgQ1YxJjAkBgNVBCkUHUhFUlJFUklBICYgRUxFQ1RSSUNPUyBTIERFIENWMSYwJAYDVQQKFB1IRVJSRVJJQSAmIEVMRUNUUklDT1MgUyBERSBDVjElMCMGA1UELRQcSCZFOTUxMTI4NDY5IC8gVkFEQTgwMDkyN0RKMzEeMBwGA1UEBRMVIC8gVkFEQTgwMDkyN0hTUlNSTDA1MRMwEQYDVQQLEwpTdWN1cnNhbCAxMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqHjtcPT4v+K0jXrhGsx+8sSS1eJ9LxCnY3/qaodXPFEik04VtM6N5as4ECs88L5zSkg182dOynfOPWAtH8Iy4Tqs39WNvvOeyIAUSvcKBU3NJtJDG93z+Eb3ExIw6NJ1fVivLtFFxVHDiJR4aZMzWixqt+tHyaOdoJ4s1qEezDZRidn0LJGgi5f+Zi6wYh51IlhJipiH0b1r/tl8tdMMxpgIr2rHGKodg+OtT/JC1xZSqpsLWJrXobTWGIuzZTVvAMIqyYzyoQwhE7hF/gWwnrcQESZWiPdpMgxhTGtTId28lAVePY+i5fi0VkotqrMf7MbtFWXqrTzw+4x084l0KQIDAQABox0wGzAMBgNVHRMBAf8EAjAAMAsGA1UdDwQEAwIGwDANBgkqhkiG9w0BAQsFAAOCAgEAdmYSUf2x1PaZ8lV2/xteUmmEBNULVIlr1l9l9RId111iymbJN8SrQmLh/8fvR8mR02iMOSQHI6330krcv8Xh/fs4U237kT62jfeezE9ZMtfbKnAxWbAJXyA6sAz2MbwJblLyA/m/NjuJirVEtTnOK8ARNrUwg2Mr1yKWjH3yi1Nx5qksYDvki7082hxA0EV7HxF6xoMFO6EGStdAoHd3m4T8VQ2hz392u35TiDair7CXA02eue7RIQLvT9BdJl2AcDdo2hLe8Pok5+HLJkLOre2akwoMttif8PZjAxIjwcecw7O+l4BOxeO8g5HGxjgvI9YMADptQxh6wh+uQhM2SFtVzM9un8JCIuxTzFA93yvoPswuZiMMMoDIv4Qa6mkI6I+BuaAVL5k6v8qSe9+EDSsNgdhIX4sg0Vyf5INxCv1uhqXcvfK55x9m0KNC2+pQR3aOKjwhFxoOqgsQ+shrhVU9MnYh18vKRwMcwJ+JNG9weEtpp+IP3VRg8ymx6YZaH3aUya8XGKefGOJvCDI0rP4CRJ31U+hPEj+RslE5qxpLHAYxvUG+0lN9gPreLXignsj1cIMlXeFjueqqmUxUYrXJpK+pF2TZId6INxHtBx2VUuDu/lvmkdKu0uqfE+LKwF9tgROF4ziI++RckYLscBmYFV4ZikhEfhkPnNYSGgc=",
          "key": "MIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIAgEAAoIBAQACAggAMBQGCCqGSIb3DQMHBAgwggS9AgEAMASCBMh4EHl7aNSCaMDA1VlRoXCZ5UUmqErAbucRBAKNQXH8t2UODHFWf3T2aLl+0N5zDUL9Qx6AZLkeqHJ/0la+6fp1olTVh0FEoKK74VhJoccXJZ/DuYzf/wrADAXL/WPPohqp/zzxeXIHVEIh/zLcfQGQ6XzSZbWn3MVJ1hFQ7W1j+uVoIjAQ6Bfenfg0/80vdbc3tvfruCsBBI6R8n2l2kA8+oA53wLj6UbO0lSZuf451YV2UdLOhZfYFb3y2kYZVIiFk0pIp2dQjsej+bV0bEqUtZAmDb/UHMdwgxEZ+jglxgBdzmfeG9Dga8FMO2E7SEoIGZ8iPNhj7/200dbk9ATi/B4b1Ntfycb7F4K8HOtfs77ztZDSW0CFUcssphniAY39GeWRwib22lENCwF5AlyhJHqQOxc3TAjamNdR/XuOKfTRY/0N1GBCMOZ51rxna9KaW8NoLg1MiJj8U7XQxQ/TNoO4ZbDQl5js6B938NtR2nipkkKAN2zbjHEpPj1FCaWHZb/tsGyrJiRi1E18X+rAdLjCrnRKZH9fTVjkVpBVhmX5kInw4l35flNPF2u/U7s1wDDKuC1ATXtu1EU14csluS/137voy/djlJRBo8NNbQXSD4rEe4HUBok5tP2C/kSL7hgacjNwWFOMpB7p6XgyhSpexLzCc1h/Ufgc5HlWxOMpWpDwZh1lTiscCZ6DKViuaM8YmHmCCq//va7Vczrag8Ci5qCArKzi7FWC1EP/aeKSOFHM5gN8Twn/7TY6pJF8zXmPsg7PddoCbEHOfmmucw5oxWbm8o6bnZ8MtIgPDnnGQW9olhrCNd5/60eyTEEvn9q4tvF2dJPcYseaJpXuGI8gcklzBMHP9i7N94vhur9hfRt2sMO+wg0+2OCv0v6bfC+BFHlNNpeLHJxU9z6nMvuOb6KpDQVdWNIzyLv8x1Ywfa6rXdJogMLVn/MHQVa/uSrj5DtS410gFRBGJ5rWrQKTo6tOnAuErSvRAzGtr6JRHzrP3tcDWP5/Gx/aknTxSu4hiUw7lrPzHvFHpg+/Ra5eDmoUHHJdt1tZOkd+5isnNga6OQH3J3Daoakg+6HLTduGjpaAEhUxt1rpdHsfX9SCd8B0sBE6n92Jq/WDq7BjZ24tT01KChm0cupcyexg5Z+6gDGyc/B1JW7MbSfye27BU2KFyJNSXboEFwPBxmx6QmKOveRc7uj3opPWKgJdlTqm7dzI57jlgBwkOXzwRo46e64sNQ7hkhA/t1FgnOoVCOoR8qTZ89U3YQREdTtRafLWSFcDVkT2oIrP2x/hvCdRVLreMVa4WyTofZb5JrPEiyW9ptZZExtyiKwFAT/rpB5Z+rTuGRmMxYIeDQOtBO9VqvQYPmFhB9aIK4mA1gR7PZY1EzUku/mu1JNCOtQPo4puaI+ZVYPfa/UN5Y6PaGIWekDr0tmyHWR2ZwzVI1NjosUly2umZQAlwEHN904Zi5vSIcJta2UhsG83gmX1Hjv4ycKKsGXlHjNZVbmMH3PmZxhfuPkKEZCR1fCvN7aHT8JjoX2mYeypgaPFV7M3oE2XWjJhpJqqft8Z1oHVQ2SCeFmjaM25szteGPQ6NYBaeILmFJe55BBUpFQ7NhKqE5/n2D6y4aU=",
          "clave": "12345678a"
        }
      }
    }
    try {
      const body = ctx.request.body;
      Object.assign(body.comprobante, emisor);
      Object.assign(body, configuracion);

      const getTokenSIFEI = await strapi
        .service("api::facturacion-sifei.facturacion-sifei")
        .getTokenSIFEI();
      console.log("Token obtenido....");

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
        .generarFacturaElec(getXML.xmlBase64);
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
        .generatePDF(getTokenSIFEI.token, getCFDI.xmlBase64);
      console.log("GetPDF obtenido....");
      if (getPDF.error != "") {
        ctx.body = {
          status: getPDF.error,
          xmlBase64: "",
          pdfBase64: ""
        };
        return
      }

      console.log("---------------------");
      console.log(getPDF);
      console.log("---------------------");

      const saveInvoice = await strapi
        .service("api::facturacion-sifei.facturacion-sifei")
        .saveInvoice({
          uso_cfdi:  getPDF.uuid,
          xml: getCFDI.xmlBase64,
          pdf: getPDF.pdfBase64,
          pedido: body.id_pedido,
          cliente: body.client_id,
        });

      const sendInvoice = await strapi
        .service("api::facturacion-sifei.facturacion-sifei")
        .sendInvoice(getCFDI.xmlBase64, getPDF.pdfBase64, getPDF.uuid, body.email);
      ctx.body = {
        status: "OK"
      };

      //console.log(saveInvoice);

      ctx.body = {
        status: "OK",
        xmlBase64: getCFDI.xmlBase64,
        pdfBase64: getPDF.pdfBase64
      };
    } catch (err) {
      console.log(err);
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
