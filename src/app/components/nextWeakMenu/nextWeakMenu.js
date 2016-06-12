'use strict';

require('./nextWeakMenu.less');
require('angular');

var nextWeakMenuComponent = require('./nextWeakMenu.component');

module.exports = angular.module('nextWeakMenu', [])
    .component('nextWeakMenu', nextWeakMenuComponent);
