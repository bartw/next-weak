'use strict';

module.exports = function NextWeakNewArticleController($scope, $location, Article) {
    var nextWeakNewArticleController = this;

    nextWeakNewArticleController.newArticle = {};

    nextWeakNewArticleController.save = function save() {
        if (nextWeakNewArticleController.newArticle &&
            nextWeakNewArticleController.newArticle.title &&
            nextWeakNewArticleController.newArticle.text) {
            Article.save(nextWeakNewArticleController.newArticle).then(function(result) {
                $location.path(encodeURI('/article/' + result.id));
                $scope.$apply();
            });
        }
    };
};
