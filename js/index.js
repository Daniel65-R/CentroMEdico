// Código JavaScript para agregar funcionalidades a la página
// Variables para almacenar la información del formulario
let email;
let password;

// Función para validar la información del formulario
function validateForm() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Por favor ingresa un correo electrónico y una contraseña válidos");
    return false;
  } else {
    // Aquí podría ir código adicional para validar si el correo electrónico y la contraseña son válidos y corresponden a un usuario registrado.

    // Si la información es válida, redirigir al usuario a su perfil
    window.location.href = "profile.html";
  }
}
function validateRegistrationForm() {
    window.location.href = "http://127.0.0.1:3000/c:/Users/L200/Desktop/registro.html";
    return false;
  }