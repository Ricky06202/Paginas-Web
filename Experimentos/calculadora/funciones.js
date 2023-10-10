const pantalla = document.getElementById('pantalla')

/** @type {HTMLButtonElement[]} */
const botones = document.querySelectorAll('.boton')

const limpiar = document.getElementById('limpiar')
const borrar = document.getElementById('borrar')
const igual = document.getElementById('igual')
const cero = document.getElementById('cero')

botones.forEach((boton) => {
	document.body.focus
	boton.addEventListener('click', agregar_a_la_pantalla)
})

document.addEventListener('keydown', (evento) => {
	const tecla = evento.key

	botones.forEach((boton) => {
		if (tecla.toLowerCase() === boton.dataset.key) {
			boton.click()
			efectoBotonPresionar(boton)
			return
		}
		if (
			tecla == boton.textContent &&
			(boton.id == '' || boton.id == cero.id)
		) {
			boton.click()
			efectoBotonPresionar(boton)
		}
	})
})

document.addEventListener('keyup', (evento) => {
	const tecla = evento.key

	botones.forEach((boton) => {
		if (tecla.toLowerCase() === boton.dataset.key) {
			efectoBotonSoltar(boton)
			return
		}
		if (
			tecla == boton.textContent &&
			(boton.id == '' || boton.id == cero.id)
		) {
			efectoBotonSoltar(boton)
		}
	})
})

/**
 *
 *
 * @param {HTMLButtonElement} boton
 */
function efectoBotonPresionar(boton) {
    boton.classList.add('hover')
}

/**
 *
 *
 * @param {HTMLButtonElement} boton
 */
function efectoBotonSoltar(boton) {
    boton.classList.remove('hover')
	boton.classList.add('active')
	setTimeout(() => {
		boton.classList.remove('active')
	}, 100)
}

let tenemosQueBorrar = true
let esError = false

function agregar_a_la_pantalla() {
	/** @type {HTMLButtonElement} */
	const boton = this

	if (boton.id == limpiar.id) {
		pantalla.textContent = '0'
		tenemosQueBorrar = true
		return
	}

	if (boton.id == borrar.id) {
		if (pantalla.textContent.length > 1 && !esError)
			pantalla.textContent = pantalla.textContent.slice(0, -1)
		else {
			pantalla.textContent = '0'
			tenemosQueBorrar = true
		}
		return
	}

    if(boton.id == igual.id){
        try {
            pantalla.textContent = eval(pantalla.textContent)
        } catch (error) {
            pantalla.textContent = 'Sintax Error'
        }
        if(pantalla.textContent == 'NaN' || pantalla.textContent == 'Infinity' || pantalla.textContent == 'Sintax Error')
            esError = true
        tenemosQueBorrar = true
        return
    }

	if (boton.id == cero.id && pantalla.textContent == '0') return

	if (tenemosQueBorrar && !esError) {
        if(!boton.classList.contains('operacion'))
		    pantalla.textContent = ''
		tenemosQueBorrar = false
	}

    if(tenemosQueBorrar && esError){
        if(boton.classList.contains('operacion')) return
        pantalla.textContent = ''
        tenemosQueBorrar = false
        esError = false
    }

	pantalla.textContent += boton.textContent

    pantalla.scrollTo(pantalla.scrollWidth, 0)
}
