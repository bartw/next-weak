'use strict';

var controller = require('./nextWeakArticle.controller');

module.exports = {
    template: require('./nextWeakArticle.html'),
    bindings: { 
        article: '<'
    },
    controller: controller
};
