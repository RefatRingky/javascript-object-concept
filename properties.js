const bottle = {
    color:'yellow' ,
    hold:'water',
    isCleaned:true,
    price:123,
};

// getting key from object using key method
const keys = Object.keys(bottle);
// console.log('The Key is:',keys);


// getting value from object using value method
const values = Object.values(bottle)
// console.log('The value is:',values);


// gettin entries form an object using entries method
const pairs = Object.entries(bottle);
// console.log('The Pair is',pairs);


// delete properties from object
delete bottle.isCleaned;
// console.log(bottle);

// seal method
Object.seal(bottle);
bottle.color = 'red';
console.log(bottle);
