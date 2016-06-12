'use strict';

require('../../app.js');

describe('nextWeakMenu', function() {
    beforeEach(angular.mock.module('app'));

    describe('with $compile', function() {
        var $compile, $rootScope, element, scope;

        beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        beforeEach(function() {
            scope = $rootScope.$new();
            element = angular.element('<next-weak-menu></next-weak-menu>');
            element = $compile(element)(scope);
            scope.$apply();
        });

        it('element is created', function() {
            expect(element).toBeTruthy();
        });

        describe('Controller: nextWeakMenu', function() {
            var controller;
            beforeEach(function() {
                controller = element.controller('nextWeakMenu');
            });

            it('controller is created', function() {
                expect(controller).toBeTruthy();
            });
        });
    });
});
