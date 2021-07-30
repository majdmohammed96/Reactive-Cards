function handlerCreateCard(event) {
  event.preventDefault();

  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.success === false) {
        responseElement.innerHTML = "Tienes que rellenar los datos";
        responseElement.classList.remove("hidden");
      } else {
        responseElement.innerHTML = `<a href= "${res.cardURL}">${res.cardURL}</a>`;
        twitterBtn.innerHTML = `<a class="js-new-tw-link" href = "https://twitter.com/intent/tweet?text=${res.cardURL}"</a>`;
        twitterBtn.innerHTML += `<i class="fab fa-twitter list-icon2c"></i>
        Compartir en twitter`;
        responseElement.classList.remove("hidden");
      }
    });
}

createBtn.addEventListener("click", handlerCreateCard);
