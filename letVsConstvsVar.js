function mehedi(){
    //block 1
    var a = 23 // assignable from anywhere
    { // block 2
        let b = 20  // assignable anywhere in block 2 and block 3 :: it a block level variable
        { //block 3
            const b = 10 // impossible to assign again 
            console.log(b);
            console.log(a);

        }
        b = 15
        console.log(b);

    }
    console.log(b); 
    
   
}

mehedi()