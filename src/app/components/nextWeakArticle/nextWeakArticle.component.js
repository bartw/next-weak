'use strict';

var controller = require('./nextWeakArticle.controller');

module.exports = {
    template: require('./nextWeakArticle.html'),
    bindings: { 
        id: '<'
    },
    controller: controller
};
