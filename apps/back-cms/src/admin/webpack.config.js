"use strict";

const { withNx } = require("@nx-extend/strapi");

module.exports = (config, webpack) => {
  return withNx(config, webpack);
};
