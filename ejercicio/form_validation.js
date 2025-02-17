// Validación de texto entre 3 y 5 letras
document.getElementById("text").addEventListener("input", function () {
  const text = this.value;
  const message = document.getElementById("textMessage");
  const symbol = document.getElementById("textSymbol");
  if (text.length >= 3 && text.length <= 5) {
    message.textContent = "Longitud válida.";
    message.className = "form-text text-success";
    symbol.textContent = "✔";
    symbol.className = "valid-symbol";
  } else {
    message.textContent = "Debe tener entre 3 y 5 letras.";
    message.className = "form-text text-danger";
    symbol.textContent = "✘";
    symbol.className = "invalid-symbol";
  }
});

// Validación de email
document.getElementById("email").addEventListener("input", function () {
  const email = this.value;
  const message = document.getElementById("emailMessage");
  const symbol = document.getElementById("emailSymbol");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(email)) {
    message.textContent = "Email válido.";
    message.className = "form-text text-success";
    symbol.textContent = "✔";
    symbol.className = "valid-symbol";
  } else {
    message.textContent = "Formato de email incorrecto.";
    message.className = "form-text text-danger";
    symbol.textContent = "✘";
    symbol.className = "invalid-symbol";
  }
});

// Validación de checkboxes
document
  .querySelectorAll('input[name="checkbox"]')
  .forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const checkboxes = document.querySelectorAll(
        'input[name="checkbox"]:checked'
      );
      const message = document.getElementById("checkboxMessage");
      const symbol = document.getElementById("checkboxSymbol");
      if (checkboxes.length === 2) {
        message.textContent = "Seleccionaste 2 opciones.";
        message.className = "form-text text-success";
        symbol.textContent = "✔";
        symbol.className = "valid-symbol";
      } else {
        message.textContent = "Debes seleccionar 2 opciones.";
        message.className = "form-text text-danger";
        symbol.textContent = "✘";
        symbol.className = "invalid-symbol";
      }
    });
  });

// Validación de select
document.getElementById("select").addEventListener("change", function () {
  const selectedOptions = this.selectedOptions;
  const message = document.getElementById("selectMessage");
  const symbol = document.getElementById("selectSymbol");
  if (selectedOptions.length === 2) {
    message.textContent = "Seleccionaste 2 opciones.";
    message.className = "form-text text-success";
    symbol.textContent = "✔";
    symbol.className = "valid-symbol";
    this.classList.add("is-valid");
  } else {
    message.textContent = "Debes seleccionar 2 opciones.";
    message.className = "form-text text-danger";
    symbol.textContent = "✘";
    symbol.className = "invalid-symbol";
    this.classList.remove("is-valid");
  }
});

// Validación general antes de enviar
function validateForm() {
  const text = document.getElementById("text").value;
  const email = document.getElementById("email").value;
  const checkboxes = document.querySelectorAll(
    'input[name="checkbox"]:checked'
  ).length;
  const selectedOptions =
    document.getElementById("select").selectedOptions.length;

  if (text.length < 3 || text.length > 5) {
    alert("La longitud del texto debe ser entre 3 y 5 letras.");
    return false;
  }
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    alert("Formato de email incorrecto.");
    return false;
  }
  if (checkboxes !== 2) {
    alert("Debes seleccionar 2 opciones en los checkboxes.");
    return false;
  }
  if (selectedOptions !== 2) {
    alert("Debes seleccionar 2 opciones en el select.");
    return false;
  }

  alert("Formulario válido.");
  return true;
}
