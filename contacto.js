var formulario = document.getElementById('formulario'),
nombre = formulario.nombre,
correo = formulario.correo,
empresa = formulario.empresa,
telefono = formulario.telefono,
comentarios = formulario.comentarios,
error = document.getElementById('error');

function validarNombre(e){
	if (nombre.value == '' || nombre.value == null){
		error.style.display = 'block';
		error.innerHTML += '<li>Complete name</li>';
		console.log('Please add name');

		e.preventDefault();
	} else{
		error.style-display ='none';
	}
}

function validarEmail(e){
	if (correo.value == '' || correo.value == null){
		error.style.display = 'block';
		error.innerHTML += '<li>Complete email</li>';
		console.log('Please add an email');

		e.preventDefault();
	} else{
		error.style-display ='none';
	}
}

function validarEmpresa(e){
	if(empresa.value == '' || emmpresa.value == null){
		error.style.display = 'block';
		error.innerHTML += '<li>Select gender</li>';
		console.log('Please select gender');

		e.preventDefault();
	} else {
		error.style.display = 'none';
	}
}

function validarEmpresa(e){
	if(empresa.value == '' || empresa.value == null){
		error.style.display = 'block';
		error.innerHTML += '<li>Select gender</li>';
		console.log('Please select gender');

		e.preventDefault();
	} else {
		error.style.display = 'none';
	}
}

function validarTelefono(e){
	if(telefono.value == '' || telefono.value == null){
		error.style.display = 'block';
		error.innerHTML += '<li>Select gender</li>';
		console.log('Please select gender');

		e.preventDefault();
	} else {
		error.style.display = 'none';
	}
}

function validarComentarios(e){
	if(comentarios.value == '' || comentarios.value == null){
		error.style.display = 'block';
		error.innerHTML += '<li>Select gender</li>';
		console.log('Please select gender');

		e.preventDefault();
	} else {
		error.style.display = 'none';
	}
}

	function validarForm(e){
		error.innerHTML = '';
		validarName(e);
		validarEmail(e);
		validarEmpresa(e);
		validarTelefono(e);
		validarComentarios(e);
	}

		formulario.addEventListener('submit', validarForm);