const $btn = document.getElementById("btn-register")

document.addEventListener("submit", (e) => {
  e.preventDefault()
})

document.addEventListener("input", (e) => {
  if (e.target.reportValidity()) {
    $btn.setAttribute("data-bs-toggle", "modal");
  }
})