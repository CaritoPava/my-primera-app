const arr = [2, 4, 2, 1, 6, 8, 2, 4, 4, 1, 9, 6, 4, 7, 4]
const obj = {}
for (let i of arr) {
  obj[i] = -~obj[i]
}
console.log(obj)
for (let i in obj) {
  if (obj[i] === 1) {
    console.log(obj)
  }
}

console.log(~undefined)
