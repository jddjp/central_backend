'use strict';

/**
 * bodega service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bodega.bodega');
