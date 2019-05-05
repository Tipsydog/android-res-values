var fs = require('fs');
var xml2js = require('xml2js');

var parser = new xml2js.Parser();
var filePath = "./values/strings.xml";
var dePath = './values-de/strings.xml';
var esPath = './values-es/strings.xml';
var frPath = './values-fr/strings.xml';
var itPath = './values-it/strings.xml';
var jaPath = './values-ja-rJP/strings.xml';
var koPath = './values-ko/strings.xml';
var ruPath = './values-ru/strings.xml';
var zhPath = './values-zh/strings.xml';
var zhhkPath = './values-zh-rHK/strings.xml';
var zhtwPath = './values-zh-rTW/strings.xml';
var value = [];
var de = [];
var es = [];
var fr = [];
var it = [];
var ja = [];
var ko = [];
var ru = [];
var zh = [];
var zhhk = [];
var zhtw = [];

fs.readFile(filePath, function (err, data) {
    parser.parseString(data, function (err, result) {
        var strings = result.resources.string
        for (var i = 0; i < strings.length; i++) {
            // console.log(strings[i].$.name)
            value.push(strings[i].$.name)
            // console.log(strings[i]._)
        }
        // console.log(value)     
    });
    console.log(value[2])           //  这个先后输出
});
console.log(value)                  //  这个后输出



// fs.readFile(dePath, function (err, data) {
//     parser.parseString(data, function (err, result) {
//         var strings = result.resources.string
//         for (var i = 0; i < strings.length; i++) {
//             // console.log(strings[i].$.name)
//             de.push(strings[i].$.name)
//             // console.log(strings[i]._)
//         }
//         // console.log(de)
//     });
// });


// var end = [];
// function getArrDifference(value, de) {

//     return value.concat(de).filter(function (v, i, arr) {
        
//         // return arr.indexOf(v) === arr.lastIndexOf(v);
//         end.push(arr.indexOf(v) === arr.lastIndexOf(v));
//     });
//     console.log(end)
// };

