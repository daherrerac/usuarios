

function registroUsuario(){
    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const user = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    // Verificar si todos los campos están llenos
    if (!name || !user || !email || !pass) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, completa todos los campos.'
        });
        return;
    }

    // Crear un objeto con los datos del usuario
    const userData = {
        name: name,
        user: user,
        email: email,
        password: pass
    };

     // Guardar los datos en localStorage (lo almacenamos bajo la clave 'userData')
     localStorage.setItem('userData', JSON.stringify(userData));

     // Confirmación usando SweetAlert
     Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Usuario registrado exitosamente.',
        confirmButtonText: 'OK'
    }).then(() => {
        // Limpiar el formulario una vez que el usuario presione "OK"
        document.getElementById('registerForm').reset();
    });

            
}

function ingresoUsuario() {
    // Obtener los valores del formulario
    const userInput = document.querySelector('input[placeholder="Ingrese un usuario"]').value;
    const passInput = document.getElementById('pass').value;

    // Obtener los datos almacenados en localStorage
    const savedUserData = JSON.parse(localStorage.getItem('userData'));

    // Verificar si existe un usuario guardado
    if (!savedUserData) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No hay ningún usuario registrado. Por favor, regístrate primero.',
            confirmButtonText: 'Ok'
        });
        return;
    }

    // Comparar los datos ingresados con los almacenados
    if (userInput === savedUserData.user && passInput === savedUserData.password) {
        // Si coinciden, mostrar un mensaje de éxito y redirigir
        Swal.fire({
            icon: 'success',
            title: 'Ingreso correcto',
            text: 'Has ingresado correctamente.',
            confirmButtonText: 'Continuar'
        }).then(() => {
            // Redirigir a la página "visto.html" después de que se cierra la alerta
            window.location.href = 'visto.html';
        });
    } else {
        // Si no coinciden, mostrar un mensaje de error
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario o contraseña incorrectos. Por favor, intenta de nuevo.',
            confirmButtonText: 'Ok'
        });
    }
}