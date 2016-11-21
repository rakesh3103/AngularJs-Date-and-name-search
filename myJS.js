/**
 * Created by Rakesh on 10/13/2016.
 */
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    $scope.resultHeader = false;


$scope.getData = function(){

    //console.log("Name: " + $scope.myInput + " start Date: " + $scope.startDate + " End Date: "+ $scope.endDate);
    $scope.data=[{"date" : new Date(2016,4,24), "name" : "John"},
        {"date": new Date(2016,9,24), "name" : "Smith"},
        {"date": new Date (2015, 9, 24), "name" : "Smith"},
        {"date" : new Date (2016, 9, 20), "name": "Smith"},
        {"date" : new Date(2016, 9, 30), "name" : "Smith"}
    ];
    //console.log(JSON.stringify($scope.data));
    $scope.newData = [];
    $scope.newDataLength = false;
angular.forEach($scope.data,function(x){

   // console.log("In for loop");
    //console.log("x.data: " + x.data+ " scope.startDate: " +  $scope.startDate);

   // console.log("value: "+ (x.name === $scope.myInput && x.date >= $scope.startDate && x.date <= $scope.endDate));
    if(x.name === $scope.myInput && x.date >= $scope.startDate && x.date <= $scope.endDate ){
        //console.log("In IF loop");
        $scope.newData.push(x);
    }
    //console.log("Name: " + x.date + " start Date: " + x.name);
} );
    $scope.resultHeader = true;
    $scope.newDataLength = $scope.newData.length === 0 ? true:false;
    //console.log("New data: " + JSON.stringify($scope.newData));
}

});