// Masalalar
// forEach metodiga oid masalalar


  // 1-masala

//   let arr =[1, 2,3,4]
//   function eachArr(arr){
//    arr.forEach(function(value) {
//     console.log(value*2);
//     });
//     return arr;
//   }
//  console.log(eachArr(arr));


 
// 2-misol

// const arr=[ 'olma ', 'banan ', 'chery']
// function printElements(arr){
//   let res =[]
// arr.forEach(function(value){
// res.push(value.toUpperCase())
// })
// return res;
// } 

// console.log(printElements(arr));


//  3-misol

// const arr= [ 1, 2, 3,4 ,5 ]
//  function    addfifeElement( arr){
//   let res= [];
//    arr.forEach(function(value){
//     res.push(value+5);
//    })
//    return res;
//   }
//   console.log(addfifeElement(arr));


// 4-misol


//  map metodiga oid


// 1-msiol


// let arr = [ 1 , 2, 3, 4]
// function mapElement(arr){
//   let res=arr.map(function(value){
//     return value*2;
//   })
//   return res;
// }
// console.log(mapElement(arr));


// 2-misol

// const arr= ['apple', 'banana', 'chery']
// function toUpperCaseArr(arr){
//   let res =[]
//   arr.map(function(value){
//   return res.push(value.toUpperCase())
//   })
//   return res;
// }
// console.log(toUpperCaseArr(arr));


// 3-misol

// const arr= [10, 20, 30,40]
//   function plusfiveArr(arr) {
//     let res= arr.map(function(value){
//       return value +5
//     })
  
//     return res;
//   }console.log(plusfiveArr(arr));

// 4-misol




// filter metodiga oid misollar 

// 1-misol

// const arr = [1, 2, 3, 4, 5, 6];

// function filterArr(arr){
//   let res= arr.filter(function(value){
//     return value %2==0;
//   })
//   return res;
// }
// console.log(filterArr(arr));

// 2-misol


// const arr= ['apple', 'banana', 'cherry', 'date']
// function filterArr(arr){

//    let res=  arr.filter(function(value , index){
//         return value.length>5;
//     })
//     return res;
//   }
//   console.log(filterArr(arr));
  
// 3-misol

// const ages = [12, 17, 18, 19, 21];
// function checkAge(ages){
//   let res= ages.filter(function(value){
//     return value>18
//   })
//   return res;

// }console.log(checkAge(ages));

// 4-misol

//  find metodiga oid masalalar


// 1-misol

// const arr = [4, 9, 11, 2, 18];

// function checkNum(num){
//   let res= num.find(function(value){
//     return value>10;
//   })
//   return res;
// }console.log(checkNum);


// 2-misol



// some/ every metodiga oid misollar

// 1-misol

// const numbers = [-1, -2, 3, -4];

// function checkNumbers(numbers){
//   let res = numbers.some(function(value){
//     return  value>0;
//   })
//   return res;
// }
// console.log( checkNumbers(numbers));

// 2-misol

// const words = ['cat', 'dog', 'elephant'];

// function checkLengthArr(words){
//   let res= words.some(function(value){
//     return value.length>5
//   })
//   return res;
// }
// console.log(checkLengthArr(words));


// 3-misol


//  let num =[1,2,3,4]
//  function checkNum(num){
//   let res= num.every(function(value){
//     return value>0
//   })
//   return res;
//  }
//  console.log(checkNum(num));

// 4-misol

