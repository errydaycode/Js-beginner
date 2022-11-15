//const name = 'Георгий'
//const age = 25

//function getAge() {
 //   return age
//}

//const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + 'лет.'
//const output = `Привет, меня зовут ${name} и мой возраст ${ age < 30 ? 'A': 'B'} лет.`
//console.log(output)

//const output = `
//<div> This is div</div>
//<p> This is p</p>
//`

//const name = 'Георгий'
//console.log(name.length)
//console.log(name.toUpperCase())
//console.log(name.toLowerCase())
//console.log(name.charAt(2))
//console.log(name.indexOf('рг'))
//console.log(name.indexOf('ву'))
//console.log(name.toLowerCase().startsWith('геор'))
//console.log(name.startsWith('Геор'))
//console.log(name.endsWith('ий'))
//console.log(name.repeat(3))
//const string = '       password       '
//console.log(string)
//console.log(string.trim())

function logPerson (s, name, age) {
    if ( age < 0 ) {
        age = ' Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Георгий'
const personAge = 25
const personName2 = 'Max'
const personAge2 = -13

const output = logPerson `Имя: ${personName}, Возраст: ${personAge}!`
console.log(output)

const output2 = logPerson `Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output2)