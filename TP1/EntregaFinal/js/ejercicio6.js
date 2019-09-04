let lienzo = document.getElementById("myCanvas");
let ctx = lienzo.getContext("2d");
let img = new Image();

//***********************Parte carga de imagenes*************************

//Borrar Lienzo
function limpiarLienzo() {
  ctx.clearRect(0, 0, lienzo.width, lienzo.height);
}

//Cargar imagen
document.getElementById('upload').addEventListener('change', function(e){
	limpiarLienzo();
  let reader = new FileReader();
  reader.onload = function(event){
  	img.onload = function(){
	    if(img.height > lienzo.height){
	        var proportion = (lienzo.height/img.height) * 100;
	        img.width = (proportion * img.width) / 100;
	        img.height = (proportion * img.height) / 100;
	    }
	    if(img.width > lienzo.width && img.width > img.height){
	        var proportion = (lienzo.width/img.width) * 100;
	        img.width = (proportion * img.width) / 100;
	        img.height = (proportion * img.height) / 100;
	    }
	    ctx.drawImage(img, 0, 0, img.width, img.height);
	  }
	  img.src = event.target.result;
    document.getElementById('filter').removeAttribute('disabled');
  }
  reader.readAsDataURL(e.target.files[0]);
});


//***************************Parte filtro******************************
function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
  }

function getRed(imageData, x, y) {
index = (x + y * imageData.width) * 4;
return imageData.data[index + 0];
}

function getGreen(imageData, x, y) {
index = (x + y * imageData.width) * 4;
return imageData.data[index + 1];
}

function getBlue(imageData, x, y) {
index = (x + y * imageData.width) * 4;
return imageData.data[index + 2];
}

// ***************Filtro Escala de grises******************
function applyGreyScale() {
  imageData = ctx.getImageData(0, 0, img.width, img.height);

  for (let x = 0; x < imageData.width; x++) {
    for (let y = 0; y < imageData.height; y++) {
      let r = getRed(imageData, x, y);
      let g = getGreen(imageData, x, y);
      let b = getBlue(imageData, x, y);

      let newColor = Math.floor((r + g + b) / 3);
          setPixel(imageData, x, y, newColor, newColor, newColor, 255);
    }
  }
  ctx.putImageData(imageData, 0, 0);
};
