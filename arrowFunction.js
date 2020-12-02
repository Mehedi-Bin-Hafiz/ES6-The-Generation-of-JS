// arrow function is a shortcut way to declare funtion



//es6 version
const print = () =>{
    console.log('hello arrow function');
} 

print()

const sum = (...numbers) =>{
    let  result = 0
    for (i of numbers){
        result += i

    }
    return result

}

let result = sum(10,20,30)
console.log(result)