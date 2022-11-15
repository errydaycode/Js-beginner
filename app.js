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

// 2 Анонимные функции
/*
let counter = 0
const interval = setInterval(function (){
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)

*/

// 3 Стрелочные функции

function greet(name) {
 console.log('Привет - ', name)
}

const arrow = (name, count ) => {
    console.log('Привет - ', name, 'Ты соснул аж', count , 'хуев' )
}

arrow('Жора', 25)
const arrow2 = name => console.log('Привет - ', name)

arrow2('HuesosikK')

const  pow2 = num =>  num ** 2

console.log(pow2(5))