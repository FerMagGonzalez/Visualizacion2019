function reloj() {
  time = new Date();
  horas = time.getHours();
  minutos = time.getMinutes();
  segundos = time.getSeconds();

  if (horas >= 12) {
    porcentajeHoras = horas / 12 * 360;
  } else {
    porcentajeHoras = horas / 24 * 360;
  }

  porcentajeHoras += minutos / 60 * 30;
  porcentajeMinutos = minutos / 60 * 360;
  porcentajeSegundos = segundos / 60 * 360;

  document.getElementById("hora").style.transform = "rotate("+ porcentajeHoras +"deg)";
  document.getElementById("min").style.transform = "rotate("+ porcentajeMinutos +"deg)";
  document.getElementById("seg").style.transform = "rotate("+ porcentajeSegundos +"deg)";
}

setInterval(reloj, 1000);
