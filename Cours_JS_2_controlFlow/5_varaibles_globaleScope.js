
//Global scope
let age = 50;
console.log('le variable est accèssible en global scope ', age);

if(true){
    let age = 100;
    console.log('scope 1', age);

    if(true){
        let age = 1;
        console.log('scope 2 ', age);
    }
}
