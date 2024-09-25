'use strict';

module.exports = {
  register({ strapi }) {
    strapi.plugin('linktree').controller('linktree', require('./controllers/linktree'));
  },
  bootstrap({ strapi }) {},
};