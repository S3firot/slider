
var imagen=["vengador1.jpg","vengador2.jpg","vengador3.jpg","vengador4.jpg","vengador5.jpg","vengador6.jpeg"];
var indice=0;

function slider(){
    indice++;
  if(indice>=imagen.length){
    indice=0;
    }
    boton.radios[indice].checked = true;
    document.getElementById("img").src="imagenes/"+imagen[indice];
}
 intervalo=setInterval(slider , 2000);


function cambiarAtras(){
  //clearInterval(intervalo);
  img.src="imagenes/"+imagen[indice];
  if(indice==[0]){
    indice=5;}
    else{indice--;}
    boton.radios[indice].checked = true;
}

function cambiarImagen(){
    img.src="imagenes/"+imagen[indice];
    indice++;
  if(indice>=imagen.length){
    indice=0;
    }
    boton.radios[indice].checked = true;
}

function botones(){
  for (i=0;i<boton.radios.length;i++){
    if (boton.radios[i].checked){
      img.src="imagenes/"+boton.radios[i].value;
      indice=i;
      break;
    }
  }
}

window.onload = function(){
  document.getElementById("atras").addEventListener("click",cambiarAtras);
  document.getElementById("delante").addEventListener("click",cambiarImagen);
  document.boton.radios[0].addEventListener("click",botones);
  document.boton.radios[1].addEventListener("click",botones);
  document.boton.radios[2].addEventListener("click",botones);
  document.boton.radios[3].addEventListener("click",botones);
  document.boton.radios[4].addEventListener("click",botones);
  document.boton.radios[5].addEventListener("click",botones);
  //atras.style.display='block';
}



  //intervalo=setInterval(slider , 2000);
//function cambiarFoto(){
 // for (i=0;i<boton.botonera.length;i++) {
   // if (boton.botonera[i].checked) {
     //getElementById("img").src=boton.botonera[i].value;
    //;}
  //}
//}
// document.boton.botonera<[i].addEventListener("click",botones);
//clearInterval(intervalo);
//intervalo=setInterval(slider , 2000);


