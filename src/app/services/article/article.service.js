'use strict';

var PouchDb = require('pouchdb');

module.exports = function Article() {
    var article = this;

    function init() {
        article.db = new PouchDb('articles');

        return article.db.info().then(function(info) {
            if (info.doc_count === 0) {
                return article.db.bulkDocs([
                    { title: 'Introduction', text: 'This is the intro.' },
                    { title: 'Quickstart', text: 'This is the quickstart. Some more' },
                    { title: 'Setup', text: 'This is the setup.' }
                ]);
            }
        });
    }

    function getMenuItems() {
        return article.initializing.then(function() {
            return article.db.allDocs({
                include_docs: true,
                descending: true
            });
        }).then(function(result) {
            return result.rows.map(function(article) {
                return {
                    id: article.doc._id,
                    title: article.doc.title
                };
            });
        }).catch(function() {
            return [];
        });
    }

    function get(id) {
        return article.initializing.then(function() {
            return article.db.get(id);
        });
    }

    article.initializing = init();

    return {
        getMenuItems: getMenuItems,
        get: get
    };
};
