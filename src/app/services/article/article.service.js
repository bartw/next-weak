'use strict';

module.exports = function Article($q) {
    var articles = [
        {
            id: 1,
            title: 'Introduction',
            text: 'This is the intro.'
        }, {
            id: 2,
            title: 'Quickstart',
            text: 'This is the quickstart. Some more'
        }, {
            id: 3,
            title: 'Setup',
            text: 'This is the setup.'
        }];

    function getMenuItems() {
        return $q(function(resolve) {
            var menuItems = articles.map(function(article) {
                return {
                    id: article.id,
                    title: article.title
                };
            });
            resolve(menuItems);
        });
    }

    function get(id) {
        return $q(function(resolve, reject) {
            var foundArticle = null;
            articles.forEach(function(article) {
                if (article.id === id) {
                    foundArticle = article;
                }
            });
            if (foundArticle) {
                resolve(foundArticle);
            } else {
                reject('not found');
            }
        });
    }

    return {
        getMenuItems: getMenuItems,
        get: get
    };
};
