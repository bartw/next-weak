'use strict';

require('angular');

var Article = require('./article/article');

angular.module('app.services', [
    Article.name
]);

module.exports = angular.module('app.services');