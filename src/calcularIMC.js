// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  let imc = peso / (altura*altura)
  if (imc > 0){
    if (imc < 18.5){
    return "Você está abaixo do peso"
    }
      if (imc < 24.9){
      return "Peso Normal"
}
  if (imc < 29.9){
    return "Sobrepeso"
  }
  if (imc > 30){
    return "Obesidade"
  }
}
else {
  return "Error"
}
}
console.log(calcularIMC (73,5))
// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };