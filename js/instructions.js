let imagen = document.querySelector("#reset");
const fotos = ["images/reset.png", "images/reset2.png", "images/reset3.png", "images/reset4.png"];
  let index = 0;
  let intervalo;

  imagen.addEventListener("mouseenter", () => {
    intervalo = setInterval(() => {
      index = (index + 1) % fotos.length;
      imagen.src = fotos[index];
    }, 200); // cambia cada 500ms
  });

  imagen.addEventListener("mouseleave", () => {
    clearInterval(intervalo);
    index = 0;
    imagen.src = fotos[index]; // vuelve a la original
  });