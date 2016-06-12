'use strict';

require('angular');

var NextWeak = require('./nextWeak/nextWeak');
var NextWeakMenu = require('./nextWeakMenu/nextWeakMenu');
var NextWeakArticle = require('./nextWeakArticle/nextWeakArticle');

angular.module('app.components', [
    NextWeak.name,
    NextWeakMenu.name,
    NextWeakArticle.name
]);

module.exports = angular.module('app.components');