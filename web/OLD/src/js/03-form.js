let data = {
  palette: "",
  name: "",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  photo: "",
};
const placeholderData = {
  name: "Nombre Apellido",
  job: "Front-end developer",
};

function handleChangeForm(ev) {
  // 1. Cojo el nuevo valor y lo guardo en una variable
  // 2. Re-pinto la tarjeta de preview

  const inputNameChanged = ev.target.name;
  const inputValueChanged = ev.target.value;

  if (inputNameChanged === "name") {
    data.name = inputValueChanged;
    previewNameElement.innerHTML = data.name || placeholderData.name;
  } else if (inputNameChanged === "job") {
    data.job = inputValueChanged;
    previewJobElement.innerHTML = data.job || placeholderData.job;
  } else if (inputNameChanged === "mail") {
    // TODO: igual que linkedin
    data.email = inputValueChanged;
    previewMailElement.href = `mailto: maria_zubeldia@hotmail.com`;
  } else if (inputNameChanged === "phone") {
    // TODO: igual que linkedin
    data.phone = inputValueChanged;
    previewPhoneElement.href = `tel:${data.phone}`;
  } else if (inputNameChanged === "linkedin") {
    data.linkedin = inputValueChanged;
    previewLinkedinElement.href = `https://linkedin.com/${data.linkedin}`;
  } else if (inputNameChanged === "github") {
    data.github = inputValueChanged;
    previewGithubElement.href = `https://github.com/${data.github}`;
  }

  saveInLocalStorage();
}

for (const eachInput of formInputList) {
  eachInput.addEventListener("keyup", handleChangeForm);
}

//Prueba del check de los colores para que cambie la tarjeta

function handlerChangeColor(ev) {
  cardPreview.classList.remove("palette-1", "palette-2", "palette-3");
  if (ev.target.value === "blue") {
    data.palette = 1;
    cardPreview.classList.add("palette-1");
  } else if (ev.target.value === "red") {
    data.palette = 2;
    cardPreview.classList.add("palette-2");
  } else if (ev.target.value === "mixedcolor") {
    data.palette = 3;
    cardPreview.classList.add("palette-3");
  }
  saveInLocalStorage();
}

for (const radio of paletteRadios) {
  radio.addEventListener("click", handlerChangeColor);
}

// Enviar al servidor clase de Iván
const createBtn = document.querySelector(".js-create-card");

function updateValuesInputs(userData) {
  console.log("holi update values");
  //1 coger cada input
  document.querySelector(".js-name").value = userData.name;
  document.querySelector(".js-job").value = userData.job;
  document.querySelector(".js-mail").value = userData.email;
  document.querySelector(".js-phone").value = userData.phone;
  document.querySelector(".js-linkedin").value = userData.linkedin;
  document.querySelector(".js-github").value = userData.github;
}

function updatePallete(userData) {
  console.log("holi caracolis update palettes");
  cardPreview.classList.remove("palette-1", "palette-2", "palette-3");
  if (userData.palette === 1) {
    cardPreview.classList.add("palette-1");
    document.querySelector(".js-color1").checked = true;
    document.querySelector(".js-color2").checked = false;
    document.querySelector(".js-color3").checked = false;
  } else if (userData.palette === 2) {
    document.querySelector(".js-color1").checked = false;
    document.querySelector(".js-color2").checked = true;
    document.querySelector(".js-color3").checked = false;
    cardPreview.classList.add("palette-2");
  } else if (userData.palette === 3) {
    document.querySelector(".js-color1").checked = false;
    document.querySelector(".js-color2").checked = false;
    document.querySelector(".js-color3").checked = true;
    cardPreview.classList.add("palette-3");
  }
}

function updateCard(userData) {
  previewNameElement.innerHTML = userData.name;
  previewJobElement.innerHTML = userData.job;
}
