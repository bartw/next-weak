'use strict';

require('./nextWeakNewArticle.less');
require('angular');

var nextWeakNewArticleComponent = require('./nextWeakNewArticle.component');

module.exports = angular.module('nextWeakNewArticle', [])
    .component('nextWeakNewArticle', nextWeakNewArticleComponent);
