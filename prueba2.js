const array = [2, 4, 6, 8]
const number = 0

const position = array.findIndex(element => element === number)
if (~position) {
  console.log(`El elemento ${number} esta en la posicion ${position}`)
}

console.log(number ? 'Si hay un numero' : 'No hay un numero')
const obj = {
  name: 'Juan',
  age: '23',
  country: 'Mexico'
}

console.log(obj.lastname)

const y = 14
let x = ''

x ||= y
console.log(1_000_000 + x)

const set = new Set()
set.add(4)
set.add(7)
set.add(2)
set.add(4)
console.log(set)