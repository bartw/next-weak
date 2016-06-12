'use strict';

require('angular');

var NextWeak = require('./nextWeak/nextWeak');

angular.module('app.components', [
    NextWeak.name
]);

module.exports = angular.module('app.components');