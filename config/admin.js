module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8b33ed1907439fd508cc8f776fa556aa'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'someKey'),
  },
  sifeiRest: {
    host: env('SIFEI_HOST_REST', 'https://devcfdi.sifei.com.mx'),
    hostPdf: env('SIFEI_HOST_PDF', ''),
    user: env('SIFEI_USER', ''),
    pass: env('SIFEI_PASS_REST', ''),
    pdfToken: env('SIFEI_PDF_TOKEN', ''),
  },
  sifeiSoap: {
    host: env('SIFEI_HOST_SOAP', ''),
    user: env('SIFEI_USER', ''),
    pass: env('SIFEI_PASS_SOAP', ''),
    idEquipo: env('SIFEI_IDEQUIPO_SOAP', ''),
  },
});
