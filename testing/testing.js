// node --watch .\scripts\testing.js

// var re1='([\\w-+]+(?:\\.[\\w-+]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7})';
var re1='@';
var p = new RegExp("@");

var m = p.test(txt);


var txt='testing@gmail.com';
var test = RegExp("@").test(txt);

var tel= "3376129834";
var test = RegExp(/^\d+$/).test(tel);

console.log(test);