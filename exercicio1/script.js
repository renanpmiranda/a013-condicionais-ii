const num = Number(prompt('Forneça um número:'))

if(num % 2 === 0){
    if(num % 3 === 0){
        console.log('É divisível por 2 ou por 3.')
    }
}

if(num % 2 === 0 || num % 3 === 0){
    console.log('É divisível por 2 ou por 3.')
}else{
    console.log('Não é divisível por 2 ou por 3.')
}