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
var flag = false;
const aPromise = new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', function(err, data){
        if (err) return reject(err)
		parser.parseString(data, function (err, result) {
			var strings = result.resources.string
			for (var i = 0; i < strings.length; i++) {
				value.push(strings[i].$.name)
			}
			resolve(value)    
		});
    })
})
aPromise.then(res=>{
	value = res;
})
const bPromise = new Promise((resolve, reject) => {
    fs.readFile(dePath, 'utf8', function(err, data){
        if (err) return reject(err)
		parser.parseString(data, function (err, result) {
			var strings = result.resources.string
			for (var i = 0; i < strings.length; i++) {
				de.push(strings[i].$.name)
			}
			resolve(de)    
		});
    })
})
var diffArr = [];
bPromise.then(res=>{
	if(res.length > value.length){
		for(var i = 0;i<res.length;i++){
			if(value[i]){
				if(res[i] != value[i]){
					diffArr.push(value[i]);
					diffArr.push(res[i]);
				}
			}
		}
	}else {
		for(var i = 0;i<value.length;i++){
			if(res[i]){
				if(res[i] != value[i]){
					diffArr.push(value[i]);
					diffArr.push(res[i]);
				}
			}
		}
	}
	console.log(diffArr)
})

var func = function(filePath,callback){
    fs.readFile(filePath, function (err, data) {
		callback(data);
	});
}
//调用
var newArr = [];
func(filePath, function(res){
    //处理异步方法返回得到的数据
    parser.parseString(res, function (err, result) {
		var strings = result.resources.string
		for (var i = 0; i < strings.length; i++) {
			// console.log(strings[i].$.name)
			value.push(strings[i].$.name)
			// console.log(strings[i]._)
		}
		// console.log(value)     
	});

})


// var end = [];
// function getArrDifference(value, de) {

//     return value.concat(de).filter(function (v, i, arr) {
        
//         // return arr.indexOf(v) === arr.lastIndexOf(v);
//         end.push(arr.indexOf(v) === arr.lastIndexOf(v));
//     });
//     console.log(end)
// };

