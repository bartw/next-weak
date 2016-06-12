'use strict';

require('angular');

var Services = require('./services/services');
var Components = require('./components/components');

angular.module('app', [ Services.name, Components.name ]);