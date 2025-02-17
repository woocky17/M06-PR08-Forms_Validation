// Validar la edad
function validateAge() {
  const ageInput = document.getElementById("age");
  const ageMessage = document.getElementById("ageMessage");

  // Restablecer cualquier mensaje de error anterior
  ageMessage.textContent = "";
  ageMessage.classList.remove("text-success", "text-danger");

  // Verificar la validez del campo de edad
  if (!ageInput.checkValidity()) {
    // Mostrar los mensajes de error al usuario
    ageMessage.textContent = "Edad inválida. Debe ser mayor de 18 años.";
    ageMessage.classList.add("text-danger");
  } else {
    // Mostrar mensaje de éxito
    ageMessage.textContent = "Edad válida.";
    ageMessage.classList.add("text-success");
  }
}

// Validar el formato de la fecha
function validateDate() {
  const dateInput = document.getElementById("date");
  const dateMessage = document.getElementById("dateMessage");
  const date = dateInput.value;
  const datePattern = /^([0-2][0-9]|(3)[0-1])-(0[1-9]|1[0-2])-\d{4}$/;

  // Restablecer cualquier mensaje de error anterior
  dateMessage.textContent = "";
  dateMessage.classList.remove("text-success", "text-danger");

  // Verificar la validez del campo de fecha usando el patrón
  if (!datePattern.test(date)) {
    // Mostrar el mensaje de error
    dateMessage.textContent = "Formato de fecha inválido. Debe ser dd-mm-aaaa.";
    dateMessage.classList.add("text-danger");
  } else {
    // Mostrar mensaje de éxito
    dateMessage.textContent = "Formato de fecha válido.";
    dateMessage.classList.add("text-success");
  }
}

// Validación antes de enviar el formulario
document.getElementById("form").addEventListener("submit", function (event) {
  const age = document.getElementById("age").value;
  const date = document.getElementById("date").value;
  const datePattern = /^([0-2][0-9]|(3)[0-1])-(0[1-9]|1[0-2])-\d{4}$/;

  // Validar edad
  if (age < 18) {
    alert("La edad debe ser mayor a 18 años.");
    event.preventDefault(); // Evita el envío del formulario
  }
  // Validar formato de la fecha
  else if (!datePattern.test(date)) {
    alert("Formato de fecha incorrecto. Debe ser dd-mm-aaaa.");
    event.preventDefault(); // Evita el envío del formulario
  }
});
