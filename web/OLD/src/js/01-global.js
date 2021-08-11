"use strict";
//variables colapsables
const arrowUpDesign = document.querySelector(".js-arrow-up-d");
const arrowDownDesign = document.querySelector(".js-arrow-down-d");

const arrowUpFill = document.querySelector(".js-arrow-up-f");
const arrowDownFill = document.querySelector(".js-arrow-down-f");

const arrowUpShare = document.querySelector(".js-arrow-up-s");
const arrowDownShare = document.querySelector(".js-arrow-down-s");

const infoPage = document.querySelector(".color-design");
const fillPage = document.querySelector(".fill-container");
const sharePage = document.querySelector(".share-container");

const designTitle = document.querySelector(".js-design-title");
const fillTitle = document.querySelector(".js-fill-title2");
const shareTitle = document.querySelector(".js-share-title3");

const finishedCard = document.querySelector(".card-done");
const sharedContainer = document.querySelector(".sharebutton");
const createCardBtn = document.querySelector(".js-create-card");

/* Form */

const formInputList = document.querySelectorAll(".js-form");
const previewNameElement = document.querySelector(".js-preview-name");
const previewJobElement = document.querySelector(".js-preview-job");
const previewMailElement = document.querySelector(".js-preview-mail");
const previewPhoneElement = document.querySelector(".js-preview-phone");
const previewLinkedinElement = document.querySelector(".js-preview-linkedin");
const previewGithubElement = document.querySelector(".js-preview-github");
const cardPreview = document.querySelector(".js-card_box");
const paletteRadios = document.querySelectorAll(".js-palette");

//images

const fr = new FileReader();
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");

//reset

const cards_button = document.querySelector(".reset-js");
const inputsForm = document.querySelectorAll(".js-form");

//fetch card

const responseElement = document.querySelector(".js-generate");
const twitterBtn = document.querySelector(".twitter-share");
const twitterCardLink = document.querySelector(".js-twitter-link");
