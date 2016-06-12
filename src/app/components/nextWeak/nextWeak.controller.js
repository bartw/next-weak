'use strict';

module.exports = function NextWeakController() {
    var nextWeakController = this;
    
    nextWeakController.onSelect = function onSelect(id) {
        nextWeakController.selectedId = id;
    };
};
