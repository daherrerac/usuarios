

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

    // Crear un objeto con los datos del nuevo usuario
    const newUser = {
        name: name,
        user: user,
        email: email,
        password: pass
    };

    // Obtener el arreglo de usuarios guardados en localStorage o crear uno nuevo si no existe
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el usuario ya existe
    const userExists = users.some(u => u.user === user);

    if (userExists) {
        Swal.fire({
            icon: 'error',
            title: 'Usuario ya registrado',
            text: 'El usuario que intentas registrar ya existe.',
            confirmButtonText: 'Ok'
        });
        return;
    }

    // Agregar el nuevo usuario al arreglo de usuarios
    users.push(newUser);
    // Guardar el nuevo arreglo de usuarios en localStorage
    localStorage.setItem('users', JSON.stringify(users));

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

    // Obtener el arreglo de usuarios guardados en localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el usuario existe en el arreglo de usuarios
    const validUser = users.find(u => u.user === userInput && u.password === passInput);

    if (validUser) {
        // Si el usuario y la contraseña coinciden, mostrar un mensaje de éxito y redirigir
        Swal.fire({
            icon: 'success',
            title: 'Ingreso correcto',
            text: `Bienvenido, ${validUser.name}!`,
            confirmButtonText: 'Continuar'
        }).then(() => {
            // Redirigir a la página "visto.html"
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