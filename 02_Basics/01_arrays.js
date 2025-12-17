//  let myarr = [0,1,2,3,4,5]
//  const newarr = myarr.join();
//  console.log(myarr);
//  console.log(newarr);
//  console.log(typeof(newarr));
 
 const marvel_heroes = ["thor","spiderman","ironman"]
  const dc_heroes = ["superman","flash","batman"]

//   marvel_heroes.push(dc_heroes);
//   console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes);

// const heroes = [...marvel_heroes, ...dc_heroes, ...all_heroes]
// console.log(heroes);

  const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
    const real_another_array = another_array.flat(Infinity);
    console.log(another_array);
    
    console.log(real_another_array);
    