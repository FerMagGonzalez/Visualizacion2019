let ctx = document.getElementById("canvas").getContext("2d");
let imageData = ctx.createImageData(800, 500);

//Funcion que pinta el pixel
function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}

for (let x = 0; x < imageData.width; x++) {
    for (let y = 0; y < imageData.height; y++) {
        setPixel(imageData, x, y, 158, 25, 55, 255);
    }
}
//funcion que imprime la imagen.
ctx.putImageData(imageData, 0, 0);
