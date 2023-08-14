// parseInt
let numFloat = 123.4551
console.log(parseInt(numFloat))

// parseFloat
let numString = "123.45"
console.log(numString)
console.log(parseFloat(numString))

// toString
console.log(numFloat.toString())

// typeof
let obj = { nome: "danilo", idade: 42}
let arr = [1,2,3,"teste"]
let bool = true

console.log(typeof numString)
console.log(typeof numFloat)
console.log(typeof obj)
console.log(typeof arr)
console.log(typeof bool)

// caractere especial
let pedido = 'Quero um copo d \'agua'
console.log(pedido)

// length
console.log(pedido.length)
console.log(numString.length)
console.log(arr.length)
console.log(obj.length)
console.log(numFloat.length)
console.log(bool.length)

// indexOf
console.log(pedido.indexOf("copo"))
console.log(pedido.indexOf("a"))
console.log(pedido.lastIndexOf("a"))

// slice
console.log(pedido.slice(0,5))
console.log(pedido.slice(6,8))
console.log(pedido)

// substr
console.log(pedido.substr(6,8))

// replace
console.log(pedido.replace("um", "algum"))
console.log(pedido)

// toUpperCase
console.log(pedido.toUpperCase())

// toLowerCase
console.log(pedido.toLocaleLowerCase())

// toFixed
console.log(numFloat.toFixed(2))

