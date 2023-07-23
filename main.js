

console.log('Привет страна main');

const btnRed = document.getElementById('btn-red');
const btnGreen = document.getElementById('btn-green');
const img = document.getElementById('image1');
console.log(img);
var imgDocument = null;
var rectSours = null;



window.onload = function() { // можно также использовать window.addEventListener('load', (event) => {
    imgDocument = img.getSVGDocument();
    console.log(imgDocument);
    rectSours = imgDocument.getElementById("rect_sours");
    console.log(rectSours);

//    rectSours.style.fill = `#00FF00`;
//    console.log(rectSours.getAttribute('style'));
 
};      


btnRed.addEventListener('click', ()=>{
    onRedClick();
})

btnGreen.addEventListener('click', ()=>{
    onGreenClick();
})

//-----------------------------------------------------------------  
const onRedClick = ()=>{
    console.log("Нажата красный");

    let strStyle = rectSours.getAttribute('style');
    let arrStyle = strStyle.split(';')

    for (let i=0; i<arrStyle.length; i++) {
        let key = arrStyle[i].split(':')[0];
        let value = arrStyle[i].split(':')[1];
        if(key === 'fill') {
            let color = '#ff3030';
            arrStyle.splice(i,1, `fill:${color}`);
            strStyle = arrStyle.join(';');
            rectSours.setAttribute('style', strStyle);
            break;
        }
    }
}

//-----------------------------------------------------------------  
const onGreenClick = ()=>{
    console.log("Нажата зеленый");

    let strStyle = rectSours.getAttribute('style');
    let arrStyle = strStyle.split(';')

    for (let i=0; i<arrStyle.length; i++) {
        let key = arrStyle[i].split(':')[0];
        let value = arrStyle[i].split(':')[1];
        if(key === 'fill') {
            let color = '#92d050';
            arrStyle.splice(i,1, `fill:${color}`);
            strStyle = arrStyle.join(';');
            rectSours.setAttribute('style', strStyle);
            break;
        }
    }
}


