"use strict";
import "./form.js";

document.addEventListener("DOMContentLoaded", () => {
  const toggleEl = document.querySelector('.toggle') 
  const toggleVariants = toggleEl.querySelectorAll('.toggle__variant')
  const formCheckbox = document.querySelector('.form__toggle-checkbox')
  const businessNameEl = document.querySelector('.form__business-name')

  toggleVariants.forEach((el) => {
    el.addEventListener('click', (event) => {
      toggleVariants.forEach(el => {
        el.classList.remove('active')
      })

      const currentVariant = event.currentTarget
      currentVariant.classList.add('active')
      const variantValue = currentVariant.dataset.value
      if (variantValue === 'business') {
        businessNameEl.classList.remove('hidden')
        formCheckbox.checked = true
        businessNameEl.required = true
      } else {
        businessNameEl.classList.add('hidden')
        formCheckbox.checked = false
        businessNameEl.required = false
      }
    })
  })

});
