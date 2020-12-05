// obj er property k variable kora 

const arr = [1,2,3,4]
let [a, ,c]=arr
console.log(a)
console.log(c)

const obj = {
    name: 'mehedi',
    email: 'mehedi@gimail.com'
}

let {name, email} = obj
console.log(name);
console.log(email)

const print=({name,email}) =>{ //{name,email} it is object
    console.log(`name ${name} and ${email}`);
}

print({email, name})


