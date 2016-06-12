'use strict';

module.exports = function NextWeakMenuController($scope, Article) {
    var nextWeakMenuController = this;

    Article.getMenuItems().then(function(items) {
        nextWeakMenuController.items = items;
        $scope.$apply();
    }).catch(function() {
        nextWeakMenuController.items = [];
        $scope.$apply();
    });
    
    nextWeakMenuController.isSelected = function isSelected(id) {
        return id === nextWeakMenuController.selectedId;
    };
};
