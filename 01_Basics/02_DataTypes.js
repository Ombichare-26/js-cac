let score = "33a";
console.log(typeof score);
let newscore = Number(score);
console.log(typeof newscore);
console.log(newscore);

let num = 0
let boolnum = Boolean(num);

console.log(typeof boolnum);
console.log(boolnum);

console.log("1"+0+"1");

let out;
console.log(typeof out);;


//................. Non-Primitive.......................
const arr = ["abc","def"];
console.log(arr[0]);

const myobj = {
    name: "Om"
}

console.log(myobj.name);

const myfunction= ()=>{
    console.log("Hello World");
    
};

myfunction();