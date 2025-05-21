// var a,b,c;
// a=10;
// b=5;
// c=a+b;
// console.log(`value of a is"$(a)"`);
// console.log(`value of b is"$(b)"`);
// console.log(`sum is $(c)`);


function sum(...a){
    var add=0;
    for(let ele of a){
        add =add+ele
    }
    console.log(`sum is=${add}`);

}
sum();
sum(2,3,4,5);
sum(10,20,30,40);
sum(9,8,7,6,5,4,3,2,1);
sum([2,3,4]);