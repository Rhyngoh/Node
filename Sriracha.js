//console.log("Sriracha. Goes great on.... nothing.");

//Compare whether two arguments are the same
//console.log(process.argv[2] === process.argv[3]);

//Another way to compare
/*var a = process.argv[2];
var b = process.argv[3];
if (a === b){
	console.log(true);
} else{
	console.log(false);
}*/
//Calculator stuffs
/*
if(process.argv[2] === "add"){
	console.log(parseInt(process.argv[3]) + parseInt(process.argv[4]));
} else
if(process.argv[2] === "subtract"){
	console.log(parseInt(process.argv[3]) - parseInt(process.argv[4]));
} else
if(process.argv[2] === "multiply"){
	console.log(parseInt(process.argv[3]) * parseInt(process.argv[4]));
} else
if(process.argv[2] === "divide"){
	console.log(parseInt(process.argv[3]) / parseInt(process.argv[4]));
} else
if(process.argv[2] === "remainder"){
	console.log(parseInt(process.argv[3]) % parseInt(process.argv[4]));
} else
if(process.argv[2] === "exp"){
	console.log(Math.pow(parseInt(process.argv[3]),parseInt(process.argv[4])));
} else
if(process.argv[2] === "algebra"){
	console.log(parseAlgebra(process.argv[3]));
}
function parseAlgebra(expression) {

  var multiplier = expression[0];
  var adder = expression[3];
  var result = expression.substring(5);

  result -= adder;
  result /= multiplier;
  return result;
}*/
/*
var inputNum = parseInt(process.argv[2]);
var multipleNum = parseInt(process.argv[3]);
var sum = 0;
for (var i = multipleNum; i <= inputNum; i += multipleNum) {
  sum += i;
}
console.log(sum);*/

/*exports and require
var iRequire = require("./bands.js");
console.log(iRequire);
if(process.argv[2] === "punk"){
	console.log(iRequire.theBands.punk);
} else
if(process.argv[2] === "rap"){
	console.log(iRequire.theBands.rap);
} else
if(process.argv[2] === "classic"){
	console.log(iRequire.theBands.classic);
}else
if(process.argv[2] === "cooking"){
	console.log(iRequire.theBands.cooking);
}*/
/*
var bands = require("./bands.js");
var bandList = bands.theBands;
for(var key in bandList){
	console.log("A " + key + " band is " + bandList[key] + ".");
}*/
//fs writeFile
/*
var fs = require("fs");
fs.writeFile("movies.txt", "Inception, Die Hard", function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("movies.txt was updated!");
});*/
/* readFile
var lazy = require("fs");
lazy.readFile("./best_things_ever.txt", "utf8", function(err, data) {
	var output = data.split(",");
	for(var i = 0; i < output.length; i++){
		console.log(output[i]);
	}
});*/
/* appendFile 
var fs = require("fs");
var textFile = process.argv[2];
fs.appendFile(textFile, "hello Kitty", function(err) {
	if (err){
		console.log(err);
	}
	else {
		console.log("content added");
	}
}); */
/* use node Sriracha.js lotto/withdraw number/deposit number/total
var fs = require("fs");
var moneyInTheBank = process.argv[2];
var getDatMoney = process.argv[3];
switch(moneyInTheBank){
	case "total":
		total();
		break;
	case "deposit":
		deposit();
		break;
	case "withdraw":
		withdraw();
		break;
	case "lotto":
		lotto();
		break;
}
function total(){
	fs.readFile("bank.txt", "utf8", function(err, data){
	    data = data.split(", ");
	    var result = 0;
	    for (var i = 0; i < data.length; i++) {
	      if (parseFloat(data[i])) {
	        result += parseFloat(data[i]);
	      }
	    }
		console.log("You have a total of " + result.toFixed(2));
  	});
}
function deposit() {
  fs.appendFile("bank.txt", ", " + getDatMoney);
  console.log("Deposited " + getDatMoney + ".");
}
function withdraw() {
  fs.appendFile("bank.txt", ", -" + getDatMoney);
  console.log("Withdrew " + getDatMoney + ".");
}
function lotto() {
  fs.appendFile("bank.txt", ", -.25");
  var chance = Math.floor((Math.random() * 10) + 1);
  if (chance === 1) {
    fs.appendFile("bank.txt", ", 2");
    console.log("Congrats you won the lottery!");
  }
  else {
    console.log("Sorry. You just lost 25 cents. Maybe you should get a job instead.");
  }
}*/
//Sorting Node sriracha.js 1 2 5 3 ...
/*var arrayLength = process.argv.length;
var blankArray = [];
for(var i = 2;i< arrayLength;i++){
	blankArray.push(process.argv[i]);
	sortBro();

	//blankArray.push(parseFloat(process.argv[i]));
}
function sortBro(){
	blankArray.sort(function(a,b){
		return a - b;
	});
}
console.log(blankArray);*/
