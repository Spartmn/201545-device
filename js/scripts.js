var link_message = document.querySelector("#js-us");
var link_map = document.querySelector("#js-view-map");
var popup_message = document.querySelector(".modal-send-message");
var popup_map = document.querySelector(".modal-map");
var form_message = popup_message.querySelector("form");
var name_field = popup_message.querySelector("[name=user]");
var email_field = popup_message.querySelector("[name=email]");
var message_field = popup_message.querySelector("[name=message]");
var storage_name = localStorage.getItem("name");
var storage_email = localStorage.getItem("email");
var message_close = document.querySelector(".message-close");
var map_close = document.querySelector(".map-close");
var overlay = document.querySelector(".modal-overlay");

var isStorageSupport = true;
var storage ="";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link_message.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_message.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  name_field.focus();
  if (storage_name) {
    name_field.value = storage_name;
    email_field.focus();
  }
  if (storage_email) {
    email_field.value = storage_email;
    message_field.focus();
  }
});

form_message.addEventListener("submit", function (evt) {
  if (!name_field.value) {
    evt.preventDefault();
    popup_message.classList.add("modal-error");
    name_field.classList.add("field-error")
  }
  if (!email_field.value) {
    evt.preventDefault();
    popup_message.classList.add("modal-error");
    email_field.classList.add("field-error");
  }
  if (!message_field.value) {
    evt.preventDefault();
    popup_message.classList.add("modal-error");
    message_field.classList.add("field-error");
  }
  if (isStorageSupport) {
    localStorage.setItem("name", name_field.value);
    localStorage.setItem("email", email_field.value);
  }

});

name_field.oninput = function () {
  name_field.classList.remove("field-error");
};

email_field.oninput = function () {
  email_field.classList.remove("field-error");
};

message_field.oninput = function () {
  message_field.classList.remove("field-error")
};

message_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_message.classList.remove("modal-show");
  popup_message.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function (evr) {
  evr.preventDefault();
  if (popup_message.classList.contains("modal-show")) {
    popup_message.classList.remove("modal-show");
    popup_message.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
  }
  if (popup_map.classList.contains("modal-show")) {
    popup_map.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup_message.classList.contains("modal-show")) {
      popup_message.classList.remove("modal-show");
      popup_message.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    }
    if (popup_map.classList.contains("modal-show")) {
      popup_map.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  }
});

link_map.addEventListener("click", function (evr) {
  evr.preventDefault();
  popup_map.classList.add("modal-show");
  overlay.classList.add("overlay-show");
});

map_close.addEventListener("click", function (evr) {
  evr.preventDefault();
  popup_map.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});
