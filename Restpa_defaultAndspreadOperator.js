let add = (a,b) => {
    return a+b
}

let sqr = ( a=1, b = a) =>{ //default parameter
    return a*b
}

console.log(sqr());

console.log(sqr(3,3))

//rest operator= ...
//spread operator=  ... 

function sum(...num){ //rest
    console.log(num);
}

sum(1,2,3,4,5)


//spread = array to single value

arr = [1,2,3,4,5,6,7]
console.log(...arr)

//by this concept we can mixed two array easily

arr2 = [9,8,7,6,5]

arrfinal=[...arr,...arr2]

console.log(arrfinal)


var obj = {
    name:'mehedi',
    age:12
}

var obj2 = {
    ...obj,
    email: 'mehedi@gmail.com'
}

console.log(obj2)


