'use strict';

/**
 * robots-txt service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::robots-txt.robots-txt');
