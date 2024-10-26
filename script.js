

//-------data type adding------

// const a="12"+12;
// console.log(a);
// console.log(typeof(a));

// let x;         // Now x is undefined
// x = 5;         // Now x is a Number
// x = "John";    // Now x is a String
// console.log(x)



// const uniqueId = Symbol('id');
// console.log(uniqueId)


// const a=4;
// b="dd"
// console.log(a+b)
// console.log(typeof(a+b))

// let bool = true;
// let num = 10;
// let result = bool + num;
// console.log(result);
// console.log(typeof(result));


// let bool=true;
// let a="is true"
// result=bool+a;
// console.log(result);
// console.log(typeof(result));




//------object---

// const a={name:"liya",
//          age:20
// }

// console.log(`my name is ${a.name} and i am ${a.age} old`);


// const a={
//     name:"liya",
//     age:20
// }


// // a.name="liyana";  //mutation
// delete a.age

// a.place="calicut";
// console.log(a);




//------promise in js-----

// const promise=new Promise((resolve, reject) => {
//     setTimeout(()=>resolve("done")
//     ),1000
    
// });

// promise.then(result=>console.log(result)
// );



// const a="123";
// const b=Number(a);
// console.log(b);
// console.log(typeof(b));

// const c=545;
// const d=String(c);
// console.log(d);
// console.log(typeof(d));



// let strNum = "123";
// let convertedNum = Number(strNum); // Explicitly converts string to number
// console.log(convertedNum); // 123
// console.log(typeof(convertedNum));

// const a= 123;
// const b="567";
// const c=Number(b);
// console.log(a+c);
// console.log(typeof(a+c));

// const a= 123;
// const b="567";
// const c=a-b;
// console.log(c);
// console.log(typeof(c));


// const a="10";
// const b="5";
// console.log(a>=b);



// console.log((Object.is(2,2)));
// console.log((Object.is("go","go")));
// console.log((Object.is(NaN,NaN)));
// console.log((Object.is ([],[])));  //false

// console.log(NaN===NaN);   //false

// console.log(-0===+0);

// console.log((Object.is(-0,+0)));//false



// obj1={}
// obj2=obj1

// console.log((Object.is(obj1,obj2))); 

// console.log(obj1===obj2);



// let a=10;
// console.log(a-=3);



// function add(a,b) {
//     return a+b;
    
// }

// const result=add(7,3);
//     console.log(result);


// console.log(typeof carName);

// function car() {
//    let carName="bmw";
//    console.log(carName);
//    console.log(typeof carName);
    
// }
// car();


// const obj={
//     name:"liya",
//     age:20
// }



// const obj={}

// obj.name="liya", obj.age=20

// console.log(`my name is ${obj.name} and i am ${obj.age} year old`);
// console.log(obj);



// const person={
//     name:"liya",
//     age:20
// }
// const x=person;

// x.age=2;
// console.log(x);


//  const hello=function() {
//     return "Hello World!";
//   }

//   hello();
  



// a();
// console.log(carName)
// console.log(typeof carName)

// function a() {
//      carName="tesla";

// }

// let carName="tesla";
// console.log(window.carName);





// var x=7;
// console.log("x is " +  x + "and y is " +  y);

// var y=5;

// "use strict";

// var a=5;
// console.log(a);

// "use strict";
// function myFunction(a, b) { 
//     return a;
// }

// myFunction();

// "use strict";
// function a() {
//     console.log(this);
    
// }
// a();



 //-----------this in method will like object----------


// const person={
//     name:"liya",
//     age:8,
//     last:function(){
//       return(`${this.name} and ${this.age}`);
        
//     }
// }

// console.log(person.last());



// -----------this alone like global object---------

// let x = this;
// console.log(x); 

// "use srict";
// let x = this;
// console.log(x); 


//-------in function----- 

 
//  "use strict";

// function a() {
//     return this;
// }
// console.log(a());


