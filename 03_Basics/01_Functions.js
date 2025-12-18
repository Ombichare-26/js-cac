// function myName() {
//     console.log("O");
//      console.log("m");
//       console.log("B");
//          console.log("i");
//           console.log("c");
//            console.log("h");
//             console.log("a");
//              console.log("r");
//              console.log("e");
// }

// myName();

// function add2num(num1,num2){
//     return num1+num2;

// }
// let result = add2num(3,6)
// console.log( result);
 
// function loginUserMessage(username){
//     return `${username} just logged in.`
// }
// console.log( loginUserMessage("omBichare"));

//  const user = {
//     username: "omBichare",
//     price: 399,
//  }

//  function handleobject(anyobeject){
//     console.log(`Username is ${anyobeject.username} and price is ${anyobeject["price"]}`);
    
//  }
//  console.log(handleobject(user));

const myarray = [100,200,300,400];

function sumarray(newarray){
    let sum = 0;
    for(let i=0;i<newarray.length;i++){
        sum += newarray[i];
    }
    return sum;
}
 
let result = sumarray(myarray);
console.log("Sum of Array: ",result);
