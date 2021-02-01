
(function(){
    //variables
    const formulario = document.querySelector('#formulario');
    const resultado = document.querySelector('#resultado');
    const resultadoTabla = document.querySelector('#resultadoTabla');
    const tabla = document.querySelector('#tabla');
    let arrayEstudiantes = [];
    //eventos
    formulario.addEventListener('submit', validarForm);
    tabla.addEventListener('click', eliminarFila);

    //funciones
    function validarForm(e){
        e.preventDefault();
        //datos de los inputs
        nombre = document.querySelector('#nombre').value
        nota1 = parseInt(document.querySelector('#nota1').value)
        nota2 = parseInt(document.querySelector('#nota2').value)
        nota3 = parseInt(document.querySelector('#nota3').value)
        //validando
        if(nombre == '' || nota1 == '' || nota2 == '' || nota3 == ''){
            mostrarAlerta('llene todos los campos');
            return
        }
        //valiables
        const prom = Number(parseFloat((nota1+nota2+nota3)/3).toFixed(2))
        const objEstudiante = {
            nombre,
            nota1,
            nota2,
            nota3,
            prom,
            id: Date.now()
        }
        arrayEstudiantes = [...arrayEstudiantes, objEstudiante]
        mostrarHTML(arrayEstudiantes);

        formulario.reset();
        
    }

    //alerta de mensaje
    function mostrarAlerta(mensaje){
        const error = document.querySelector('.error')
        if(!error){
            const alerta = document.createElement('div')
            alerta.classList.add('alert', 'alert-danger', 'mt-1', 'error')
            alerta.innerHTML = `
                <p>Error!...<span class="text-danger">${mensaje}</span></p>
            `;
            resultado.appendChild(alerta)
    
            setTimeout( ()=> {
                alerta.remove()
            },2000 )
        }
    }

    //mostrar en HTML las notas
    function mostrarHTML(estudiantes){
        //limpiarHTML
        limpiar();
        estudiantes.forEach( item => {
            const {nombre, nota1, nota2, nota3, prom, id} = item
            const row = document.createElement('tr')
            row.innerHTML = `
            <th scope="row">${nombre}</th>
            <td class="text-center" >${nota1}</td>
            <td class="text-center" >${nota2}</td>
            <td class="text-center" >${nota3}</td>
            <td class="text-center" >${prom}</td>
            <td><a href="#" class="btn btn-danger w-100 eliminar" data-id="${id}" >x</a></td>
            `;
            resultadoTabla.appendChild(row)
        });
    }

    //funcion limpiar HTML
    function limpiar(){
        while(resultadoTabla.firstChild){
            resultadoTabla.removeChild(resultadoTabla.firstChild)
        }
    }
    //eliminar estudiante
    function eliminarFila(e){
        if(e.target.classList.contains('eliminar')){
            const estudianteID = e.target.dataset.id
            const confirmar = confirm('Desea eliminar')
            if(confirmar){
                arrayEstudiantes = arrayEstudiantes.filter( item => item.id != estudianteID )
                mostrarHTML(arrayEstudiantes);
            }
        }
    }



})()