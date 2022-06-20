'use strict';

/**
 * pedidopago service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pedidopago.pedidopago');
