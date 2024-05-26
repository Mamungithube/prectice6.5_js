const bigFrnd = (array)=>{
    let biggestName = array[0];
    for(let i=0;i<array.length;i++){
        if (array[i].length > biggestName.length){
            biggestName = array[i];
        }
    }
    return biggestName;
}
const friends = ["rahim", "karim", "abdul", "sadsd",
 "heroAlom"];

const result = bigFrnd(friends)
console.log(result)