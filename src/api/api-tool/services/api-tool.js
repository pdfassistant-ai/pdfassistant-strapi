'use strict';

/**
 * api-tool service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::api-tool.api-tool');
