// Seleção de elementos
const multicationForm = document.querySelector('#multiplication-form')
const numberInput = document.querySelector('#number')
const multiplicationIpunt = document.querySelector('#multiplicator')
const multiplicatorTable = document.querySelector('#multiplication-operations')

const multicationTitle = document.querySelector('#multiplication-title span')
// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicatorTable.innerHTML = ''

    for(let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i

        const templete = `<div class="row">
            <div class="operation"> ${number} X ${i} = <span class="result">${result}<span/><div/>
            <div/>`

        const parser = new DOMParser()
        const htmlTemplemte = parser.parseFromString(templete, "text/html")
        const row = htmlTemplemte.querySelector('.row')
        multiplicatorTable.appendChild(row)
    }

}
// eventos
multicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const multiplicationNumber = +numberInput.value

    const multiplicatorNumber = +multiplicationIpunt.value

    multicationTitle.innerHTML = multiplicationNumber
    
    if(!multiplicationNumber || !multiplicatorNumber) {
        window.alert('Preenchar os campos!')
        return
    }
    createTable(multiplicationNumber, multiplicatorNumber)
})
