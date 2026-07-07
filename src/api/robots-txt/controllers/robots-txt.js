'use strict';

/**
 * robots-txt controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::robots-txt.robots-txt');
