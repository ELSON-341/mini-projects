// Seleção de elementos
const multicationForm = document.querySelector('#multiplication-form')
const numberInput = document.querySelector('#number')
const mltiplicationIpunt = document.querySelector('#multiplicator')

// Funções

// eventos
multicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const multiplicationNumber = +numberInput.value

    const multiplicatiorNumber = +mltiplicationIpunt.value
    
    if(!multiplicationNumber || !multiplicatiorNumber) return

    console.log(multiplicationNumber, multiplicatiorNumber)

})
