var link_message = document.querySelector("#js-us");
var popap_message = document.querySelector(".modal-send-message");
var form_message = popap_message.querySelector("form");
var name_field = popap_message.querySelector("[name=user]");
var email_field = popap_message.querySelector("[name=email]");
var message_field = popap_message.querySelector("[name=message]");
var storage_name = localStorage.getItem("name");
var storage_email = localStorage.getItem("email");
var modal_close = document.querySelector(".modal-close");
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
  popap_message.classList.add("modal-show");
  overlay.classList.add("modal-show");
  name_field.focus();
  if (storage_name) {
    name_field.value = storage_name;
    email_field.focus;
  }
  if (storage_email) {
    email_field.value = storage_email;
    message_field.focus;
  }
});

form_message.addEventListener("submit", function (evt) {
  if (!name_field.value || !email_field.value || !message_field.value) {
    evt.preventDefault();
    popap_message.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("name", name_field.value);
      localStorage.setItem("email", email_field.value);
    }
  }
});

modal_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap_message.classList.remove("modal-show");
  popap_message.classList.remove("modal-error");
  overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function (evr) {
  evr.preventDefault();
  popap_message.classList.remove("modal-show");
  popap_message.classList.remove("modal-error");
  overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popap_message.classList.contains("modal-show")) {
      popap_message.classList.remove("modal-show");
      popap_message.classList.remove("modal-error");
      overlay.classList.remove("modal-show");
    }
  }
});
