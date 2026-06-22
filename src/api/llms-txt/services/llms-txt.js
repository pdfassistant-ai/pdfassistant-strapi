'use strict';

/**
 * llms-txt service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::llms-txt.llms-txt');
