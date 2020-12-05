let name = 'mehedi'
let email = 'mehedi@gmail.com'

const person ={
    name, //no need to name: name
    email,
    print(){ // no need to write function() keyword
        console.log(this.name, this.email);
    }
}

person.print()