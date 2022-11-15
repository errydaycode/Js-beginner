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

/* function greet(name) {
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


 */

// 4 Параметры по умолчанию

//const sum = (a = 40, b = a * 2) => a +b

function sumAll(...all) {
    let  result = 0
        for ( let num of all) {
        result += num
                                }
            return result
                        }
const res = sumAll(1,2,3,4,5,7)
console.log(res)

// 5 Замыкания

function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('gerry')
console.log(logWithLastName('Listopad'))
console.log(logWithLastName('smith'))

