/* Boton para ocultar y aparecer el menu  */
let fondo = document.querySelector(".fondo");

let btn = document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".menu").style.right = "0";
  fondo.style.display = "block"
})
  document.querySelector(".exit").addEventListener("click", ()=> {
    document.querySelector(".menu").style.right = "-50%";
    fondo.style.display = "none"
})
fondo.addEventListener("click", ()=> {
  document.querySelector(".menu").style.right = "-50%";
  fondo.style.display = "none"
})
/*EFECTO DEL SCROLL*/
let home = document.querySelector("#home")
let imagen1 = document.querySelector("#image1");
let imagen2 = document.querySelector("#image2");
let parrafo1 = document.querySelector('#parrafo1');
let parrafo2 = document.querySelector('#parrafo2');
/*JOBS*/
let job1 = document.querySelector('#job1');
let job2 = document.querySelector("#job2");
let job3 = document.querySelector("#job3");
let job4 = document.querySelector("#job4");

const cargarImagen = (entradas, observador)=>{
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      document.querySelector(".btn-subir").style = "display: flex"
    }
    else{entrada.target.classList.remove('visible');}
  });
}
/*OBSERVADOR*/
let observador = new IntersectionObserver(cargarImagen, {
  root: null,
  // Los cuatro margenes
  rootMargin: '0px 0px 0px 0px',
  // Tamaño de la imagen que entra
  threshold: .5
})

observador.observe(image1);
observador.observe(image2);
observador.observe(parrafo1);
observador.observe(parrafo2);
// observador.observe(home);
/*IMAGENES DE LOS TRABAJOS*/
observador.observe(job1);
observador.observe(job2);
observador.observe(job3);
observador.observe(job4);
