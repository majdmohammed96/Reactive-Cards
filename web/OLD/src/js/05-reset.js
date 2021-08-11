"use strict";

/*Tengo que hacer una funcion que recoja todos los campos input (colores, nombre, puesto, imagen, mail, tlf, y rrss)

una vez hecha esta función, que recoge todo, tengo que hacer otra función que restablezca los campos que introduce la usuaria.
Antes definiría el listener del botón RESET. */

function resetForm() {
  console.log("limpiando");
  document.getElementById("cleanForm").value = "";
  if (resetForm === "") {
    cardPreview.innerHTML = "Nombre Completo";
    //limpiar imagen
    profileImage.style.backgroundImage = 'url("../images/uni.png");'; //resetear imagen, queda resetearla del formulario
  }
}
cards_button.addEventListener("click", resetForm);

function resetAll() {
  inputsForm.forEach((el) => {
    el.value = "";
  });

  // Reseteamos la tarjeta
  previewNameElement.innerHTML = placeholderData.name;
  previewJobElement.innerHTML = placeholderData.job;
  profilePreview.style.backgroundImage = 'url("../images/uni.png");'; //resetear imagen, queda resetearla del formulario

  // TODO: Repetir con el resto de campos
}

function resetPalettes() {
  //resetear paletas colores e imagen

  const checkedPalette = document.querySelector(".js-palette-color:checked");
  checkedPalette.checked = false;
  const paletteDefault = document.querySelector(".color1");
  paletteDefault.checked = true;
  const cardElement = document.querySelector(".js-cardElement");

  cardElement.classList.remove("opt1", "opt2", "opt3");
  cardElement.classList.add("opt1");
}
