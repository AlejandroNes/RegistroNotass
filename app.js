// validar formjulario

(function(){

    // variables
    const formulario = document.querySelector('#formulario');
    const boton = document.querySelector('#boton');
    const resultado = document.querySelector('#resultado');


    //eventos
    formulario.addEventListener('submit', validarFormulario)

    //funciones
    function validarFormulario(e){
        e.preventDefault();
        //valores del input
        const usuario = document.querySelector('#usuario').value
        const contrasenia = document.querySelector('#contrasenia').value

        const admin = 'admin';
        const password = '1234';
        if(usuario != admin || contrasenia != password){
            mostrarAlerta('Ingrese bien los datos!...')
            return
        }
            console.log('bienvenido')
            window.location.href = 'notas.html'
        
    }

    //funcion de alerta
    function mostrarAlerta(mensaje){
        const error = document.querySelector('.error')
        if(!error){
            const alerta = document.createElement('div')
            alerta.classList.add('alert', 'alert-danger', 'mt-3', 'error')
            alerta.innerHTML = `
                <strong>Error!...</strong>
                <p>${mensaje}</p>
            `;
            resultado.appendChild(alerta)
    
            setTimeout( ()=> {
                alerta.remove()
            },2000 )
        }

    }
})()
