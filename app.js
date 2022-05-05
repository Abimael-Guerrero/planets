const inputWeight = document.querySelector('.input')
const done = document.querySelector('.button')
const kilos = document.querySelector('.kg')
const lbs = document.querySelector('.lbs') 
let weight = ''

kilos.addEventListener('click', (e) => {
    kilos.classList.add('clicked')
    lbs.classList.remove('clicked')
    weight = e.target.innerText
})

lbs.addEventListener('click', (e) => {
    lbs.classList.add('clicked')
    kilos.classList.remove('clicked') 
    weight = e.target.innerText
})


done.addEventListener('click', function () {
    const converted = Number(inputWeight.value)

    if (inputWeight.value.includes(' ') || inputWeight.value === '') {
        window.alert('Do not leve white spaces')
        inputWeight.value = ''
    } else if (isNaN(converted)) {
        window.alert('You must use only numbers not letters')
        inputWeight.value = ''
    } else if (weight === ''){ 
        window.alert('Porfavor selecione un peso')
    } else {
        // location.href = 'select-planet.html'
        // window.alert(`${inputWeight.value}${weight}`)
        // document.querySelector('.input-container').style.display = 'none'
        document.querySelector('h1').innerText = "Your weight is"
        document.querySelector('h1').style.textAlign = 'center'
        document.querySelector('body').style.alignItems = 'flex-start'
        done.style.display = 'none'
        kilos.style.display = 'none'
        lbs.style.display = 'none'
        inputWeight.classList.add('done-button-clicked')
        inputWeight.value = inputWeight.value + weight 
    }
    
    inputWeight.addEventListener('focusin', function () {
        if (weight === 'kg') {
            // const i = inputWeight.value.search('k')
            // inputWeight.value.slice(i, i + 2)
            const changeWeight = inputWeight.value.replace('kg', '')
            inputWeight.value = changeWeight
        } else {
            const changeWeight = inputWeight.value.replace('lbs', '')
            inputWeight.value = changeWeight
        }
    })
    
    inputWeight.addEventListener('focusout', function () {
        inputWeight.value = inputWeight.value + weight 
    })

    // console.log('Todo salio bien')
    // console.log(inputWeight.value )
    // document.get
    // window.onclick = e => {
    //     console.log(e.target)
    //     console.log(e.target.tagName)
    //     console.log(e.target.innerText)
    //}
    // inputWeight.value
})