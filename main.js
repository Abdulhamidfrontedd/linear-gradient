let body = document.querySelector('body')
let btn  = document.querySelector('.btn')
let linearColor1 = document.querySelector('.linear-color1')
let linearColor2 = document.querySelector('.linear-color2')
let linearColor3 = document.querySelector('.linear-color3')
let deg = document.querySelector('.deg')
let linearColor4 = document.querySelector('.linear-color4')
let value = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]
function bodyChange(){
    function colorMaker(){
        let color = '#'
        for(let i=0; i<6;i++){
            let random = Math.floor(Math.random()*value.length)
            color += value[random]
        }
        return color
    }
    
    let rang1 = colorMaker()
    let rang2 = colorMaker()
    let rang3 = colorMaker()
    let rang4 = colorMaker()
    linearColor1.textContent = rang1
    linearColor2.textContent = rang2
    linearColor3.textContent = rang3
    linearColor4.textContent = rang4
    let randomDeg = Math.floor(Math.random()*360+1)
    deg.textContent = randomDeg 
    body.style.background = `linear-gradient(${randomDeg}deg, ${rang1},${rang2},${rang3},${rang4})`
}
bodyChange()

btn.addEventListener('click',bodyChange)
