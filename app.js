const inputWeight = document.querySelector('.input')
const done = document.querySelector('.done-button')
const kilos = document.querySelector('.kg')
const lbs = document.querySelector('.lbs') 
const weights = document.querySelectorAll('.weight') // buttons for kg & lbs

let weight = ''
let completed = false
let planetsPhase = true // false

function verifier() {
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
        document.querySelector('.main-container').style.width = '258px'

        weights.forEach((e) => {
            e.style.display = 'none'
        })

        done.style.display = 'none'
        inputWeight.classList.remove('change-input-weigth')
        inputWeight.classList.add('input-clicked')
        inputWeight.value = inputWeight.value + weight 
        completed = true

        if(planetsPhase){
            createPlanets()
        }
    }
}

function createPlanets(){            
    const chosePlanetText = document.createElement('h1')
    const planetsNamesDiv = document.createElement('div')

    chosePlanetText.innerHTML = '<span>Now</span><br>Chose a planet</br>'
    planetsNamesDiv.innerHTML = 'Mercury'
    planetsNamesDiv.classList.add('planets-names')
    // lines container
    const linesContainer = document.createElement('div')
    const line = document.createElement('div')
    const halfCircle = document.createElement('div')

    linesContainer.classList.add('lines-container')
    line.classList.add('line')
    halfCircle.classList.add('half-circle')
    linesContainer.append(line, halfCircle)
    // div for planets
    const planetsContainer = document.createElement('div')
    const planetMercury = document.createElement('div')
    const planetVenus = document.createElement('div')
    const planetEarth = document.createElement('div')
    const planetMars = document.createElement('div')
    const planetJupiter = document.createElement('div')
    const planetSturn = document.createElement('div')
    const planetUrano = document.createElement('div')
    const planetNeptune = document.createElement('div')
    
    planetsContainer.classList.add('planets-container')
    planetsContainer.append(planetMercury, planetVenus, planetEarth, planetMars, planetJupiter, planetSturn, planetUrano, planetNeptune)
    
   
    
    
    document.querySelector('.main-container').append(chosePlanetText, planetsNamesDiv, linesContainer)
    document.querySelector('body').append(planetsContainer)
    
    planetsPhase = false
}

weights.forEach((e) => { 
    e.addEventListener('click', () => {
        for (let i = 0; i < weights.length; i++) {
            weights[i].classList.remove('clicked')             
        }
        e.classList.add('clicked')
        weight = e.innerText
    })
})

done.addEventListener('click', verifier)

inputWeight.addEventListener('click', function () {
    if(completed) {
        if (weight === 'kg') {
            // const i = inputWeight.value.search('k') //3
            // inputWeight.value.slice(i, i + 2)
            const changeWeight = inputWeight.value.replace('kg', '')
            inputWeight.value = changeWeight
        } else {
            const changeWeight = inputWeight.value.replace('lbs', '')
            inputWeight.value = changeWeight        
        }
    
        kilos.style.display = 'block'
        // kilos.style.width = '15%'
        // kilos.style.border = 'none'
        lbs.style.display = 'block'
        // lbs.style.width = '15%'
        // lbs.style.border = 'none' 
        done.style.display = 'block'
        inputWeight.classList.add('change-input-weigth')
    
      
        // const span = document.createElement('span')       
        // chosePlanetDiv.appendChild(span)
       
    }  
})

// document.querySelector('body').addEventListener('click', () => {
//     if (other) {
//         window.alert('funciono')
//     }
// })