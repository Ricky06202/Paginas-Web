const pantalla = document.querySelector('.pantalla')
const botones = document.querySelectorAll('.boton')

tenemosQueBorrar = true

botones.forEach(boton => {
	boton.addEventListener("click", () => {
		const botonApretado = boton.textContent;
		
		if(boton.id === "c") {
			pantalla.textContent = "0"
			return
		}

		if(boton.id === "borrar"){
			if(pantalla.textContent.length === 1 || tenemosQueBorrar){
				pantalla.textContent = "0"
				tenemosQueBorrar = true
			}
			else
				pantalla.textContent = pantalla.textContent.slice(0,-1)
			return
		}

		if(boton.id === "igual"){
			try {
				pantalla.textContent = eval(pantalla.textContent)
			} catch (error) {
				pantalla.textContent = "Error!"
			}
			tenemosQueBorrar = true
			return
		}

		if(boton.id === "cero" && pantalla.textContent === "0")
			return

		if (tenemosQueBorrar){
			pantalla.textContent = botonApretado;
			tenemosQueBorrar = false
		}
		else
			pantalla.textContent += botonApretado;
		


	})
})

