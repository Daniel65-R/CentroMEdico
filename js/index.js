// Código JavaScript para agregar funcionalidades a la página
// Variables para almacenar la información del formulario
let email;
let password;

const alertError = document.getElementById('alertError')

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
    window.location.href = "/register.html";
    return false;
  }

const validateAccess = () =>{
  let passText = document.getElementById('password')
    if (passText.value == 12345) {
        location.href = "privatePage.html";
    } else {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-danger alert-dismissible" role="alert">`,
            `   <div>Contraseña NO coinciden</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button>',
            '</div>'
        ].join('')

        alertError.append(wrapper)
        passText.value = ""
    }
}