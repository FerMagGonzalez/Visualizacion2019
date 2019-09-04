let ctx = document.getElementById("canvas").getContext("2d");
let width = document.getElementsByTagName("canvas")[0].getAttribute("width");
let height = document.getElementsByTagName("canvas")[0].getAttribute("height");
let imageData = ctx.createImageData(width, height);

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
        let r = 5 + (y * (255 / imageData.height));
        let g = 50 + (y * (255 / imageData.height));
        let b = 100 + (y * (255 / imageData.height));
        setPixel(imageData, x, y,  r, g, b, 255);
    }
}
//funcion que imprime la imagen.
ctx.putImageData(imageData, 0, 0);
