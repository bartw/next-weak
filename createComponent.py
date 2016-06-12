import sys
import os
import re

if len(sys.argv) != 2:
    print 'this script accepts only 1 parameter, the component name'
    sys.exit()

name = sys.argv[1]
capitalizedName = name[0].upper() + name[1:]
dashedName = "-".join(re.findall('[A-Z][^A-Z]*', capitalizedName)).lower()
directory = './src/app/components/' + name + '/'

if os.path.exists(directory):
    print 'component already exists'
    sys.exit()

os.makedirs(directory)

with open(directory + name + '.html', 'a+') as html:
    html.write('<div class="' +  dashedName + '">' + name + '</div>')
    
with open(directory + name + '.js', 'a+') as module:
    module.write("'use strict';\n")
    module.write("\n")
    module.write("require('./" + name + ".less');\n")
    module.write("require('angular');\n")
    module.write("\n")
    module.write("var " + name + "Component = require('./" + name + ".component');\n")
    module.write("\n")
    module.write("module.exports = angular.module('" + name + "', [])\n")
    module.write("    .component('" + name + "', " + name + "Component);\n")
        
with open(directory + name + '.less', 'a+') as less:
    less.write("." + dashedName + " {}\n")
    
with open(directory + name + '.component.js', 'a+') as component:
    component.write("'use strict';\n")
    component.write("\n")
    component.write("var controller = require('./" + name + ".controller');\n")
    component.write("\n")
    component.write("module.exports = {\n")
    component.write("    template: require('./" + name + ".html'),\n")
    component.write("    controller: controller\n")
    component.write("};\n")
    
with open(directory + name + '.controller.js', 'a+') as controller:
    controller.write("'use strict';\n")
    controller.write("\n")
    controller.write("module.exports = function " + capitalizedName + "Controller() {\n")
    controller.write("};\n")
    
with open(directory + name + '.spec.js', 'a+') as spec:
    spec.write("'use strict';\n")
    spec.write("\n")
    spec.write("require('../../app.js');\n")
    spec.write("\n")
    spec.write("describe('" + name + "', function() {\n")
    spec.write("    beforeEach(angular.mock.module('app'));\n")
    spec.write("\n")
    spec.write("    describe('with $compile', function() {\n")
    spec.write("        var $compile, $rootScope, element, scope;\n")
    spec.write("\n")
    spec.write("        beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_) {\n")
    spec.write("            $compile = _$compile_;\n")
    spec.write("            $rootScope = _$rootScope_;\n")
    spec.write("        }));\n")
    spec.write("\n")
    spec.write("        beforeEach(function() {\n")
    spec.write("            scope = $rootScope.$new();\n")
    spec.write("            element = angular.element('<" + dashedName + "></" + dashedName + ">');\n")
    spec.write("            element = $compile(element)(scope);\n")
    spec.write("            scope.$apply();\n")
    spec.write("        });\n")
    spec.write("\n")
    spec.write("        it('element is created', function() {\n")
    spec.write("            expect(element).toBeTruthy();\n")
    spec.write("        });\n")
    spec.write("\n")
    spec.write("        describe('Controller: " + name + "', function() {\n")
    spec.write("            var controller;\n")
    spec.write("            beforeEach(function() {\n")
    spec.write("                controller = element.controller('" + name + "');\n")
    spec.write("            });\n")
    spec.write("\n")
    spec.write("            it('controller is created', function() {\n")
    spec.write("                expect(controller).toBeTruthy();\n")
    spec.write("            });\n")
    spec.write("        });\n")
    spec.write("    });\n")
    spec.write("});\n")

print 'created component ' + name + ' at ' + directory + ', use with <' + dashedName + '><' + dashedName + '/>.'