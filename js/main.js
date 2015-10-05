/**
 * Created by coffee on 15/10/5.
 */

var app = angular.module('tableApp', []);

app.controller('tableCtrl', function ($scope) {
    var config = {
        pageNum: 10 //分页大小
    };
    //所有数据
    $scope.allData = [
        {
            name: '张三',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三1',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四1',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三2',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四2',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三3',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四3',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三4',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四4',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三5',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四5',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三6',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四6',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三7',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四7',
            age: 23,
            sex: '男',
            scope: 80
        },{
            name: '张三',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三1',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四1',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三2',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四2',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三3',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四3',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三4',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四4',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三5',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四5',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三6',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四6',
            age: 23,
            sex: '男',
            scope: 80
        },
        {
            name: '张三7',
            age: 23,
            sex: '男',
            scope: 100
        },
        {
            name: '李四7',
            age: 23,
            sex: '男',
            scope: 80
        }

    ];
    //分页数据
    $scope.data = $scope.allData.splice(0, config.pageNum);
    //页面数量
    $scope.pageCount = new Array(Math.ceil($scope.allData.length/config.pageNum));

    $scope.toPage = function (index) {
        $scope.data = $scope.allData.slice(index*10, index*10+config.pageNum);
    }
});

angular.module('tableApp').directive('tablePage', function () {
    return {
        restrict: 'E',
        replace: true,
        translate: false,
        templateUrl: 'tpls/table-page.html',
        link: function () {

        },
        controller: function () {

        }
    }
});