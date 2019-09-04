let ctx = document.getElementById("canvas").getContext("2d");
let imageData = ctx.createImageData(900, 600);

//Funcion que pinta el pixel
function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}

let medio = imageData.width/2;
let valor = 0;
for (let x = 0; x < imageData.width; x++) {
    for (let y = 0; y < imageData.height; y++) {
        if (x <= medio) {
            valor = x / medio * 255;
            setPixel(imageData, x, y, valor, valor, 0, 255);
        } else {
            valor = 255 - ((x - medio) / medio * 255);
            setPixel(imageData, x, y, 255, valor, 0, 255);
        }
    }
}

ctx.putImageData(imageData, 0, 0);
