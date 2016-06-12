'use strict';

require('angular');

var NextWeak = require('./nextWeak/nextWeak');
var NextWeakMenu = require('./nextWeakMenu/nextWeakMenu');

angular.module('app.components', [
    NextWeak.name,
    NextWeakMenu.name
]);

module.exports = angular.module('app.components');