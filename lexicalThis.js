
const obj = {
    name : 'mehedi',
    print :function(){
        setTimeout(() =>{ // it solve the bind problem
            console.log(this.name)
        },1000)  
    },
    
}
obj.print()