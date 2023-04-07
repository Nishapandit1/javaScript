function possibleCombinations(str){
    let arr=[];
    for(let i=0;i<str.length;i++){
        for (let j=i+1;j<str.length+1;j++){
            arr.push(str.slice(i,j));
        }
      
    }
    return arr;
}
console.log(possibleCombinations("dog"));

// using arrow function
let possibleOutComes=((str)=>{
    let combination=[];
    let length=str.length;
    for (let i=0;i<length;i++){
        for (let j=i+1;j<length+1;j++){
            combination.push(str.slice(i,j));
        }
    }
    return combination;
});
console.log(possibleOutComes("hot"));