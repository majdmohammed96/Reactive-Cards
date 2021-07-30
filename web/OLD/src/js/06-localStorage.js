function saveInLocalStorage() {
  const userData = JSON.stringify(data);
  localStorage.setItem("userData", userData);
}

function getFromLocalStorage() {
  const userDataLocal = localStorage.getItem("userData");
  if (userDataLocal !== null) {
    const userData = JSON.parse(userDataLocal);
    data = userData;

    //llebar info de los inputs
    updateValuesInputs(userData);
    updatePallete(userData);
    updatePhoto(userData);
    updateCard(userData);
  }
}

getFromLocalStorage();
