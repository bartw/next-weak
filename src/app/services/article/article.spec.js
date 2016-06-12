'use strict';

require('../../app.js');

describe('article', function() {
    var $rootScope, Article;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function(_$rootScope_, _Article_) {
        Article = _Article_;
        $rootScope = _$rootScope_;
    }));

    it('getMenuItems', function() {
        Article.getMenuItems().then(function(items){
            expect(items.length).toBeTruthy();
        });
        $rootScope.$apply();
    });
    
    it('get with existing item succeeds', function() {
        var id = 1;
        Article.get(id).then(function(item){
            expect(item).toBeTruthy();
            expect(item.id).toBe(id);
        });
        $rootScope.$apply();
    });
    
    it('get with non existing item fails', function() {
        Article.get(-1).catch(function(message){
            expect(message).toBe('not found');
        });
        $rootScope.$apply();
    });
});
