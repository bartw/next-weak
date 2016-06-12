'use strict';

module.exports = function NextWeakMenuController(Article) {
    var nextWeakMenuController = this;

    Article.getMenuItems().then(function(items) {
        nextWeakMenuController.items = items;
    }).catch(function() {
        nextWeakMenuController.items = [];
    });
    
    nextWeakMenuController.isSelected = function isSelected(id) {
        return id === nextWeakMenuController.selectedId;
    };
};
