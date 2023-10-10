const CLASE_O = 'o', CLASE_X = 'x'
let esTurnoX
const COMBINACIONES_DE_VICTORIA = [
	
]

/** @type {HTMLButtonElement[]} */
const celdas = document.querySelectorAll('.celda')
const panelPrincipal = document.getElementById('mensajeGanador')
const tablero = document.getElementById('tablero')
const boton = document.getElementById('boton')

mostrarPantallaPrincipal()

function mostrarPantallaPrincipal(){
	mostrarBienvenida()	
}

boton.addEventListener('click', empezarJuego)

function empezarJuego(){
	esTurnoX = true
	cambiarTurnoTablero()
	ocultarMenu()
}

function ocultarMenu(){
	panelPrincipal.classList.remove('mostrar')
}


celdas.forEach(celda => {
	celda.addEventListener('click', accionCelda, {once: true})
})

function accionCelda(){
	/** @type {HTMLButtonElement} */
	const celda = this
	const turnoActual = esTurnoX ? CLASE_X : CLASE_O
	ponerFicha(celda, turnoActual)
	cambiarTurno()
	cambiarTurnoTablero()
}

function ponerFicha(celda, turnoActual){
	celda.classList.add(turnoActual)
}

function cambiarTurno(){
	esTurnoX = !esTurnoX
}

function cambiarTurnoTablero(){
	const turnoActual = esTurnoX ? CLASE_X : CLASE_O
	const turnoOpuesto = !esTurnoX ? CLASE_X : CLASE_O
	tablero.classList.remove(turnoOpuesto)
	tablero.classList.add(turnoActual)
}

function mostrarBienvenida(){
	panelPrincipal.classList.add('mostrar')
	panelPrincipal.firstChild.textContent = 'TIC TAC TOE'
	panelPrincipal.children[1].textContent = '!!!Jugar!!!'
}

function mostrarVictoria(){
	panelPrincipal.classList.add('mostrar')
	panelPrincipal.firstChild.textContent = 'Has Ganado!!!'
	panelPrincipal.children[1].textContent = 'Volver a Jugar???'
}

