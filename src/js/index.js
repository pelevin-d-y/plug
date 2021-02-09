"use strict";
import Swal from "sweetalert2";

document.addEventListener("DOMContentLoaded", () => {
  const createHtmlForEmail = (value) => {
    return `<div>
      <div>
        email: <b>${value}</b>
      </div>
    </div>`;
  };
  const createLetterData = (value) => ({
    to: "wrisycle@42.works",
    subject: "wrisycle contact form",
    text: "yo",
    html: createHtmlForEmail(value),
  });

  let sending = false;

  formElem.onsubmit = (e) => {
    e.preventDefault();
    if (!sending) {
      const formData = new FormData(formElem);
      let letterData;
      for (var [key, value] of formData.entries()) {
        letterData = JSON.stringify(createLetterData(value));
      }
      sending = true;
      fetch("https://api.42.works/mailer", {
        method: "POST",
        body: letterData,
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
