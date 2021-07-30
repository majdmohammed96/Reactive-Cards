// Abrimos o cerramos los collapsables por defecto
hideFill();
hideShare();

function hideShare(ev) {
  if (ev) ev.preventDefault();
  sharePage.classList.toggle("js-hidden");
  arrowDownShare.classList.toggle("js-hidden");
  arrowUpShare.classList.toggle("js-hidden");
}

function hideFill(ev) {
  if (ev) ev.preventDefault();
  fillPage.classList.toggle("js-hidden");
  arrowDownFill.classList.toggle("js-hidden");
  arrowUpFill.classList.toggle("js-hidden");
}

function hideSDesign(ev) {
  ev.preventDefault();
  infoPage.classList.toggle("js-hidden");
  arrowUpDesign.classList.toggle("js-hidden");
  arrowDownDesign.classList.toggle("js-hidden");
}

designTitle.addEventListener("click", hideSDesign);
fillTitle.addEventListener("click", hideFill);
shareTitle.addEventListener("click", hideShare);

function showFinishedCard() {
  sharedContainer.classList.add("js-hidden");
  finishedCard.classList.remove("js-hidden");
}

createCardBtn.addEventListener("click", showFinishedCard);
