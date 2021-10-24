const boton=document.querySelector('#boton');
function alerta(){
    alert('Mensaje enviado, nos comunicaremos con usted');
}
boton.addEventListener('click', function(event){
  const formulario=document.querySelector('form');
  formulario.reset();
  alerta();
});