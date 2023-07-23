

console.log('Привет страна mspu');
const btnRed = document.getElementById('btn_red');
const btnGreen = document.getElementById('btn_gren');



btnRed.addEventListener('click', ()=>{
    onRedClick();
})

btnGreen.addEventListener('click', ()=>{
    onGreenClick();
})

//-----------------------------------------------------------------  
const onRedClick = ()=>{
    console.log("Нажата красный");
}

//-----------------------------------------------------------------  
const onGreenClick = ()=>{
    console.log("Нажата зеленый");
}
