'use strict';

require('../../app.js');

describe('nextWeak', function() {
    beforeEach(angular.mock.module('app'));

    describe('with $compile', function() {
        var $compile, $rootScope, element, scope;

        beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        beforeEach(function() {
            scope = $rootScope.$new();
            element = angular.element('<next-weak></next-weak>');
            element = $compile(element)(scope);
            scope.$apply();
        });

        it('element is created', function() {
            expect(element).toBeTruthy();
        });

        describe('Controller: nextWeak', function() {
            var controller;
            beforeEach(function() {
                controller = element.controller('nextWeak');
            });

            it('controller is created', function() {
                expect(controller).toBeTruthy();
            });
        });
    });
});
