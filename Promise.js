
// Nothing is waiting for others is a concept of asyncronus 
console.log('I am first');
setTimeout(()=>{
    console.log('I am second')
},100)
console.log('I am second');

// creating promise

let myFirstPromise = new Promise((resolve,reject) =>{
    let name = 'mehedi'
    resolve(name)
})

console.log(myFirstPromise);

myFirstPromise.then((name) =>{
       console.log('we are '+ name);
})
// .catch(() =>{

// })