'use strict';

/**
 * robots-txt router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::robots-txt.robots-txt');
