// concatenate array

// var arr=["vijya",23,"male"];
// var arr1=["mohan",25,"male"];
// var c=["1001","2002", ...arr1, ...arr ,"johan",55,"male"]
// for(let ele of c){
//     console.log(`val is=${ele}`);
// }

// var obj=
// {"name":mohan","age":21,"marks":45.56};
// var obj1={"gen":true,"behaviour":'A'};
// var c ={...obj, ...obj1, "address","indore"}
// for(let ele in c){
//     console.log(`key is ${ele.} value is=${c[ele]}`);
// }



// class and object --

class A{
    a=10;
    sum(){
        var a=10;
        var b=40;
        var c=a+b;

        console.log("sum is ="+c)

    }
}
var obj=new A();
obj.sum();
console.log(`value of a is ${obj.a}`)