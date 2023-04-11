// HW1 return a random integer number between 1..10
function produce () {
//      Math.floor - округление вниз до целого числа
//      return Math.floor(Math.random() * 10 + 1)

//      Math.ceil  - округление вверх до целого числа 
//      return Math.ceil(Math.random() * 10)

//      Math.round - округление до ближайшего целого числа  
//      return Math.round(Math.random() * 9 + 1)
}


// HW2 divide by two and round the value to an integer
//     Math.round возвращает ближайшее целое число, что удобно, если делящееся значение не целое
function transform (n) {
    let res = Math.round(n / 2)
    return res
}
