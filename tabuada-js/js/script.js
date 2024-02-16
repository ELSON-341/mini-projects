// Seleção de elementos
const multicationForm = document.querySelector('#multiplication-form')
const numberInput = document.querySelector('#number')
const multiplicationIpunt = document.querySelector('#multiplicator')
const multiplicatorTable = document.querySelector('#multiplication-operations')
// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicatorTable.innerHTML = ''

    for(let i = 1; i <= multiplicatorNumber; i++){
        const result = number * i

        const templete = `<div class="row">
            <div class="operation"> ${number} X ${i} = <div/>
            <class="result">${result}<div/>
            <div/>`
    }
}
// eventos
multicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const multiplicationNumber = +numberInput.value

    const multiplicatorNumber = +multiplicationIpunt.value
    
    if(!multiplicationNumber || !multiplicatorNumber) {
        window.alert('Preenchar os campo!')
        return
    }
    createTable(multiplicationNumber, multiplicatorNumber)

})
