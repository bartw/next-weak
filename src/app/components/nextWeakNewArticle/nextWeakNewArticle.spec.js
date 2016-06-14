'use strict';

require('../../app.js');

describe('nextWeakNewArticle', function() {
    beforeEach(angular.mock.module('app'));

    describe('with $compile', function() {
        var $compile, $rootScope, element, scope;

        beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        beforeEach(function() {
            scope = $rootScope.$new();
            element = angular.element('<next-weak-new-article></next-weak-new-article>');
            element = $compile(element)(scope);
            scope.$apply();
        });

        it('element is created', function() {
            expect(element).toBeTruthy();
        });

        describe('Controller: nextWeakNewArticle', function() {
            var controller;
            beforeEach(function() {
                controller = element.controller('nextWeakNewArticle');
            });

            it('controller is created', function() {
                expect(controller).toBeTruthy();
            });
        });
    });
});
