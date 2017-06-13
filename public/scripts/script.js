//angular module
var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider){
  $routeProvider.when('/', {
    template: '<div class="parallax-container">' +
        '<div> <img src="images/hogwarts.jpg"></div>' +
        '</div>' +
        '<div class="char"><h1>Harry Potter</h1></div>' +
        '<p>Harry gets a clear nuber 1',
    controller: 'mainController as mc'
  }).when('/frodo', {
  template: '<div class="parallax-container">' +
            '<div> <img src="images/frodo.jpg"></div>' +
            '</div>' +
            '<div class="char"><h1>Frodo Baggins</h1></div>' +
            '<p>frodo wines alot but who doesnt love him',
    controller: 'frodo as f'
  }).when('/sam', {
    template: '<div class="parallax-container">' +
        '<div> <img src="images/samwise.jpg"></div>' +
        '</div>' +
        '<div class="char"><h1>Samwise Gamgee</h1></div>' +
        '<p>everyone loves sam, if you dont you have no soul',
    controller: 'sam as a'
  });
});

//main controller
app.controller('mainController', mainController);
app.controller('frodo', frodo);
app.controller('sam', sam);

function mainController(){
console.log('mc');

}

function frodo(){
  console.log('frodo');
}

function sam(){
  console.log('sam');
}
