'use strict';

require('angular');
require('angular-route');

var Services = require('./services/services');
var Components = require('./components/components');

angular.module('app', ['ngRoute', Services.name, Components.name])
    .config(function($routeProvider) {
        $routeProvider
            .when('/article/:articleId', {
                template: '<next-weak-article article="$resolve.article"></next-weak-article>',
                resolve: {
                    article: function(Article, $route) {
                        return Article.get($route.current.params.articleId);
                    }
                }
            });
    });