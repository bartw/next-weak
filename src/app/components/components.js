'use strict';

require('angular');

var NextWeak = require('./nextWeak/nextWeak');
var NextWeakMenu = require('./nextWeakMenu/nextWeakMenu');
var NextWeakArticle = require('./nextWeakArticle/nextWeakArticle');
var NextWeakNewArticle = require('./nextWeakNewArticle/nextWeakNewArticle');

angular.module('app.components', [
    NextWeak.name,
    NextWeakMenu.name,
    NextWeakArticle.name,
    NextWeakNewArticle.name
]);

module.exports = angular.module('app.components');