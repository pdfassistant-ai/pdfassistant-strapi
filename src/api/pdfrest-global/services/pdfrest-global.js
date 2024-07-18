'use strict';

/**
 * pdfrest-global service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pdfrest-global.pdfrest-global');
