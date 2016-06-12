'use strict';

module.exports = function NextWeakArticleController($scope, Article) {
    var nextWeakArticleController = this;

    $scope.$watch(function() {
        return nextWeakArticleController.id;
    }, function(newId, oldId) {
        if (newId && newId !== oldId) {
            Article.get(newId).then(function(article) {
                nextWeakArticleController.article = article;
            }).catch(function() {
                nextWeakArticleController.article = null;
            });
        }
    });
};
