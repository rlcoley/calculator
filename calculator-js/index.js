

// const num1 = document.getElementById("num1-el").value
// const num2 = document.getElementById("num2-el").value
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")


function add() {
    
    
    let num1 = Number(document.getElementById("num1-el").value)
    let num2 = Number( document.getElementById("num2-el").value)
     let result = (num1 + num2)
    sumEl.textContent = "Sum: " + result

    let resetNum1 =  document.getElementById("num1-el").value = ''
    let resetNum2 =  document.getElementById("num2-el").value = ''

    // Number(num1)

    
}


function subtract() {
    let num1 = Number(document.getElementById("num1-el").value)
    let num2 = Number( document.getElementById("num2-el").value)
     let result = (num1 - num2)
    sumEl.textContent = "Sum: " + result

    let resetNum1 =  document.getElementById("num1-el").value = ''
    let resetNum2 =  document.getElementById("num2-el").value = ''
}


function divide() {
    let num1 = Number(document.getElementById("num1-el").value)
    let num2 = Number( document.getElementById("num2-el").value)
     let result = (num1 / num2)
    sumEl.textContent = "Sum: " + result

    let resetNum1 =  document.getElementById("num1-el").value = ''
    let resetNum2 =  document.getElementById("num2-el").value = ''

}


function multiply() {
    let num1 = Number(document.getElementById("num1-el").value)
    let num2 = Number( document.getElementById("num2-el").value)
     let result = (num1 * num2)
    sumEl.textContent = "Sum: " + result

    let resetNum1 =  document.getElementById("num1-el").value = ''
    let resetNum2 =  document.getElementById("num2-el").value = ''
}
