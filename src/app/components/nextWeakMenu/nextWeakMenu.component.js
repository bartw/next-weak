'use strict';

var controller = require('./nextWeakMenu.controller');

module.exports = {
    template: require('./nextWeakMenu.html'),
    bindings: {
        selectedId: '<',
        onSelect: '&'
    },
    controller: controller
};
