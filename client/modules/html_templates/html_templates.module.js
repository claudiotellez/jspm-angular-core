;(function(){

'use strict';

angular.module('HTMLTemplates', []).run(['$templateCache', function($templateCache) {

  $templateCache.put('modules/calculator/calculator.tpl.html', '<h1>Calculator</h1> <table> <tr> <td>Input 1</td> <td><input type="number" ng-model="calculator.input1"></td> </tr> <tr> <td>Operator</td> <td><select ng-model="calculator.operator" ng-options="operator for operator in calculator.operators"></select></td> </tr> <tr> <td>Input 2</td> <td><input type="number" ng-model="calculator.input2"></td> </tr> <tr> <td>Result</td> <td><span>{{ calculator.result }}</span></td> </tr> <tr> <td col-span="2"><button ng-click="calculator.calculate()">Calculate</button></td> </tr> </table>');

  $templateCache.put('modules/home/home.tpl.html', '<h1>Home</h1> {{ home.title }} <br> <a ui-sref="calculator">Calculator</a>');

}]);

})();