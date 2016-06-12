'use strict';

require('./nextWeakArticle.less');
require('angular');

var nextWeakArticleComponent = require('./nextWeakArticle.component');

module.exports = angular.module('nextWeakArticle', [])
    .component('nextWeakArticle', nextWeakArticleComponent);
