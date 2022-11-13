// 1 Переменные
// camelCase
//const firstName = 'Georgy'
// const lastName = 'Listopad' // string
// const age = 25; // number
//const isProgrammer = true // boolean

//const  $ = 'private'
//const _ = 'some value'

// const if = 'error' // err
//const withNum5 = '5'
 // const 5withNum5 = 5 // er

//2 Мутирование

 // console.log('Имя человека: ' + firstName + ', а возраст человека ' + age)
 // alert('Имя человека: ' + firstName + ', а возраст человека ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
//let currentYear = 2022
//const birthYear = 1997

// const age = currentYear + birthYear
//const a = 10
//const b = 5

//let c = 32

//c = c + a
//c = c - a
//c = c * a
//c = c / a
//c +=a
//c -=a
//c *=a
// c /=a

//console.log( a + b )
//console.log( a - b )
//console.log( a * b )
//console.log( a / b )

//console.log(++currentYear)
//console.log(--currentYear)
//console.log(c)

// 4 Типы данных
//const lastName = 'Listopad'
//const age = 25;
//const isProgrammer = true
//let x
//console.log(typeof isProgrammer)
//console.log(typeof age)
//console.log(typeof lastName)
//console.log(x)
// console.log(null)

// 5 приоритет операторов
//const  fullAge = 25
//const birthYear = 1997
//const currentYear = 2022

//const isFullAge = currentYear - birthYear >= fullAge //
//console.log(isFullAge)

// 6 Условные операторы
//const courseStatus = 'fail' // ready, fail, pending

//if (courseStatus ==='ready') {
 //   console.log ( 'Курс уже готов и его можно проходить')
//} else if(courseStatus ==='pending') {
  //  console.log ( 'Курс пока находится в процессе разработки')
//} else {
  //  console.log('Курс не получился')
//}

//const isReady = true

//if (isReady) {
  //  console.log('Всё готово!')
//} else {
  //  console.log('Всё не готово!')
//}
// Тернарное выражение
// isReady ? console.log('Всё готово!') : console.log('Всё не готово!')

//const num1 = 42 // number
//const num2=  '42' // string

//console.log( num1 === num2)

// 7 Булевая логика
https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#логические_операторы


// 8 функции


function calculateAge(year) {
    return 2022 - year
}

//console.log(calculateAge(1993))
//console.log(calculateAge(1999))
//console.log(calculateAge(1997))

function logInfoAbout (name, year) {
    const age = calculateAge(year)

    if (age > 0) {
        console.log('Человек по имени ' + name + ' Сейчас имеет возраст ' + age )
    } else {
        console.log('Вообще-то это уже будущее!')
    }


}

logInfoAbout('Георгий' , '1997')
logInfoAbout('Елена' , '1993')
logInfoAbout('Елена' , '2043')
