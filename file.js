
import fs from 'fs';


// var data = "my name is devesh\n"
// fs.appendFileSync("info.txt",data);
// console.log("File created");


// var a=fs.readFileSync("info.txt");
// console.log(a.toString());


var data="I am from indore"
fs.writeFileSync("info.txt",data);

var info=fs.readFileSync("info.txt")
console.log(info.toString());

var data="I am from Harda"
fs.writeFileSync("info.txt",data)
var info=fs.readFileSync("info.txt")
console.log(info.toString());

data="I am from ujjain"
fs.appendFileSync("info.txt",data);
var info=fs.readFileSync("info.txt")
console.log(info.toString());



// var data = "hello file is here"
// fs.writeFileSync('index.txt',data);


// fs.appendFileSync('index.txt',"file name is index");
// var f = fs.readFileSync('index.txt')
// console.log(f.toString());



