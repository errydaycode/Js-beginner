// 1 Функции

// Function Declaration
//function greet(name) {
   // console.log('Привет - ', name)
//}

//Function expression
//const greet2 = function greet2 (name) {
   // console.log('Привет2 - ', name)
//}


//greet('Аня')
//greet2('Аня')

//console.log(typeof greet)

//console.dir(greet) Функкции - объекты

// Анонимные функции
let counter = 0
const interval = setInterval(function (){
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)

