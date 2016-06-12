'use strict';

require('./nextWeak.less');
require('angular');

var nextWeakComponent = require('./nextWeak.component');

module.exports = angular.module('nextWeak', [])
    .component('nextWeak', nextWeakComponent);
