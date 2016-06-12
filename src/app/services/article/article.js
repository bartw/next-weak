'use strict';

require('angular');

var articleService = require('./article.service');

module.exports = angular.module('article', [])
    .factory('Article', articleService);
