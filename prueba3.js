const arr = []
const finalArr = []
let x = 1;
for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    arr[j] = (x++)
  }
  finalArr.push(Array(...arr))
}

// console.table(finalArr)
// console.log(finalArr)


// const finalArr1 = []
// let y = 1;
// for (let i = 0; i <= 9; i++) {
//   const arr1 = []
//   for (let j = 0; j <= 9; j++) {
//     arr1.push(y++)
//   }
//   finalArr1[i] = arr1
// }

// console.table(finalArr1)
// console.log(finalArr1)


// const final = []
// let z = 1;
// for (let i = 0; i <= 9; i++) {
//   const emo = ["ðĨ°", "ð", "ð", "ðĪĢ", "ð", "ð", "ðĪŠ", "ðĪĐ", "ðĪ", "ðĪŦ",
//     "ðķ", "ð§", "ð§", "ðĶ", "ð§", "ðĻ", "ðĐ", "ðī", "ðĩ", "ðŪ",
//     "ð·", "ð", "ðĩ", "ðĪš", "â―ïļ", "ð", "ð", "âūïļ", "ðū", "ð",
//     "ð", "ðą", "ð", "ðļ", "ðĨ", "ð", "ð", "ð", "ðŋ", "â·",
//     "ð", "ð", "ð", "ðķ", "ðą", "ð­", "ðđ", "ð°", "ðĶ", "ðŧ",
//     "ðž", "ðĻ", "ðŊ", "ðĶ", "ðŪ", "ð·", "ð―", "ðļ", "ðĩ", "ð",
//     "ð", "ð", "ð", "ð", "ð§", "ðĶ", "ðĪ", "ðĢ", "ðĨ", "ðĶ",
//     "ðĶ", "ðĶ", "ðĶ", "ðš", "ð", "ðī", "ðĶ", "ð", "ð", "ðĶ",
//     "ð", "ð", "ð", "ð", "ðĶ", "ð·", "ðļ", "ðĶ", "ðĒ", "ð",
//     "ðĶ", "ðĶ", "ðĶ", "ð", "ðĶ", "ðĶ", "ðĶ", "ðĄ", "ð ", "ð",
//     "ðŽ", "ðģ", "ð", "ðĶ", "ð", "ð", "ð", "ðĶ", "ðĶ", "ð",
//   ]
//   const arr1 = []
//   for (let j = 0; j <= 9; j++) {
//     arr1.push(emo[z++])
//   }
//   final[i] = arr1
// }

// console.table(final)
// console.log(final)




// let z1 = 1;
// for (let i = 0; i <= 9; i++) {
//   for (let j = 0; j <= 9; j++) {
//     final[i][j] = z1++
//   }
// }

// console.table(final)
// console.log(final)

// let suma;
// function sumaDiagonal1() {
//   for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//       if (i === j) {
//         suma = suma + matriz10por10[j][j];
//       }
//     }
//   }
//   return suma;
// }
// console.log(sumaDiagonal1());

// / EJERCICIO NUMERO 3

// //SUMA DE DIAGONAL 1
// let suma = 0;
// function sumaDiagonal1(matriz10por10) {
//   for (let i = 0; i < matriz10por10.length; i++) {
//     for (let j = 0; j < matriz10por10.length; j++) {
//       if (i === j) {
//         suma = suma + matriz10por10[i][j];
//       }
//     }
//   }
//   return suma;
// }
// console.log(sumaDiagonal1(matriz10por10));

// //SUMA DE DIAGONAL 1
// let suma2 = 0;
// function sumaDiagonal2(matriz10por10) {
//   for (let i = 0; i < matriz10por10.length; i++) {
//     for (let j = 0; j < matriz10por10.length; j++) {
//       if (i + j === 9) {
//         suma2 = suma2 + matriz10por10[i][j];
//       }
//     }
//   }
//   return suma2;
// }
// console.log(sumaDiagonal2(matriz10por10));


// desafio
let arrayNombres = [["ð­ Lucas", "ð­ Camila", "ð­ Pedro"], ["ð­ Juan", "ð­ Luisa", null]]

console.table(arrayNombres)
console.log(arrayNombres[1][1])

let index

function nombres(nombre) {
  for (let i = 0; i < arrayNombres.length; i++) {
    for (let j = 0; j < arrayNombres.length; j++) {
      if (arrayNombres[i][j] === nombre) {
        index = [i, j]
        return index
      }
    }
  }
  return false
}
console.log("La busqueda es :")
console.log(nombres("ð­ Camila"))