"use strict";
import Swal from "sweetalert2";

document.addEventListener("DOMContentLoaded", () => {
  let sending = false;

  

  formElem.onsubmit = (e) => {
    e.preventDefault();
    if (!sending) {
      sending = true;
      const formData = new FormData(formElem);
      const formDataValues = Object.fromEntries(formData);
      const isBusinessCheckbox = document.querySelector('.form__toggle-checkbox')
      formDataValues.is_business = isBusinessCheckbox.checked
      
      
      fetch("", {
        method: "POST",
        body: JSON.stringify(formDataValues),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          sending = false;
          if (res.status === 200) {
            Swal.fire("Thanks!", "Message sent!", "success");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        })
        .catch((err) => {
          console.error("err", err);
          sending = false;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    }
  };
});
