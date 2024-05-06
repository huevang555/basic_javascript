// let age = 18 ;
// console.log(age);// 18
/*
let blue = 0x0000ff;
console.log(blue); // 255 ເປັນເລກຖານ 10

let pi = 3.14159;
console.log(pi);

let firstname = " huevang";
let lastname = "vang";
console.log(firstname +"and lastname:"+lastname);

let isReading = true;
 let isSleeping = false;
 console.log(isReading);
 console.log(isSleeping);

 let data = null;
 console.log(data);

 let i
  
 console.log(i)

 let sym1 = Symbol('foo');
 console.log(sym1);

 let mycar = new Object();
 mycar.make = 'ford';
 mycar.model = 'Mustang';
 console.log(mycar.make);

 console.log("helloworld \n new world")
 console.log("helloworld \r new world")
 console.log("helloworld \t new world")
 console.log("helloworld \' new world")
 console.log("helloworld \" new world")

console.log(`hello ${firstname} this is ${lastname}`)

var obj = {
    name:'Sithiphone',
    age:18,
    isMarried:true
}

console.log(`hello my name is ${obj.name} and I am ${obj.age} and I am Married ${obj.isMarried ? 'married':'sigle'}`)

//function
function sayHello(name){
    return console.log(`hello, ${name}`)
}

// console.log(sayHello("huevang"));
sayHello('huevang')

let sayHellos = (name) =>  console.log(`hello, ${name}`)
sayHellos('chivang')

let {name,age,isMarried} = obj;
console.log(`hello ${name} and ${age} he is ${isMarried ? 'married' : 'sigle'}`)


let arr = ['huevang',23,true];
let [name2,age2,isMarried2] = arr;
console.log(`hello, my name is ${name2} and my age is ${age2} and I am ${isMarried2 ? 'married':'sigle'}`)

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];

let arr3 = [...arr1,...arr2];
let arr4 = [...arr3,11,12,13,14,15]
console.log(arr3);
console.log(arr4);

let obj1 = {name :'ka',age:23};
let obj2 = {width:55,height:160};
let obj3 = {...obj1,...obj2}

console.log(obj3)

// rest parameter

function getmynmae(...args){
    return args.join(' ');
}


console.log(getmynmae('ka','hue'))

function getNum(a=1,b=2,c){
    console.log(a,b,c);
}

getNum('','',6)

let arrnum = [1,2,3,4];
let mix = [1,'a','b',];
let arrobj = [{name:'ka'},{name:'hue'}]
let arrsum = [arrnum,arrnum];


console.log(arrsum);
console.log(arrobj);
console.log(mix[1])

*/

// for (let i=0;i<5;i++){
//     console.log(i);
// }




// how to get index with value of array
// let arr = [1,2,3,4,5];

// arr.forEach((value,index)=>{
//     console.log(value,index)
// })


// example of for of

// let arr = [1,2,3,4,5];
// for (let value of arr){
//     console.log(value)
// }

//example show name of variable with value of it 


// let obj = {
//     name:'sithiphone',
//     age:18,
//     isMarried:true
// }
// for(let key in obj){
//     console.log(key,obj[key])
// }


// example of insert value into array and delete value in array

// let arr = [1,2,3,4,5];
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr)

// arr.unshift(0); // insert zero into infort of array
// console.log(arr)

let arr = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = arr.concat(arr2);
console.log(arr3);
let arr4 = [1,2,3,4,5];
// let arr5 = arr4.slice(1,3);
 arr4.slice(1,2);

// console.log(arr5)
console.log(arr4.slice(1,2))

let arr7 = [1,2,3,4,5];
arr7.copyWithin(0,3);
console.log('arr7:',arr7);
let arr8=arr7.fill(0,1,3);
let arr9=arr7.reverse();
let arr10=arr7.sort();
console.log('arr:',arr8);
console.log('arr9:',arr9);
console.log('arr10:',arr10);











