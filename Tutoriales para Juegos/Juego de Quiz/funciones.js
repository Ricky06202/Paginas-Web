const empezar = document.getElementById("empezar");
const siguiente = document.getElementById("siguiente");
const contenedorPreguntas = document.getElementById("contenedor-preguntas");
const preguntaTexto = document.getElementById("pregunta");
const botonesRespuestas = document.getElementById("grupo-botones");

let preguntasDesordenadas = [], preguntaActual;

empezar.addEventListener("click", comenzarJuego);
siguiente.addEventListener("click", () => {
    preguntaActual++
    ponerSiguientePregunta()
});

function comenzarJuego() {
    quitarClaseDeEstado(document.body)
    
	empezar.classList.add("oculto");
    preguntaActual = 0
	preguntasDesordenadas = preguntas.sort(() => Math.random() - 0.5);

	contenedorPreguntas.classList.remove("oculto");
	ponerSiguientePregunta();
}

function ponerSiguientePregunta() {
	reiniciarEstado();
	mostrarPregunta(preguntasDesordenadas[preguntaActual]);
}

function mostrarPregunta(pregunta) {
	preguntaTexto.textContent = pregunta.pregunta;
	pregunta.respuestas.forEach(respuesta => {
		const boton = document.createElement("button");
		boton.textContent = respuesta.texto;
		boton.classList.add("boton");
		if (respuesta.correcto) boton.dataset.correcto = respuesta.correcto;
		boton.addEventListener("click", seleccionarRespuesta);
		botonesRespuestas.appendChild(boton);
	});
}

function reiniciarEstado() {
    quitarClaseDeEstado(document.body)
    preguntaTexto.textContent = ''
	siguiente.classList.add("oculto");
	while (botonesRespuestas.firstChild)
		botonesRespuestas.removeChild(botonesRespuestas.firstChild);
}

function seleccionarRespuesta(e) {
    const botonSeleccionado = e.target
    const correcto = botonSeleccionado.dataset.correcto
    ponerClaseDeEstado(document.body, correcto)
    Array.from(botonesRespuestas.children).forEach(boton => {
        ponerClaseDeEstado(boton, boton.dataset.correcto)
    })
    if (preguntasDesordenadas.length > preguntaActual+1)
        siguiente.classList.remove('oculto')
    else{
        empezar.textContent='Reiniciar'
        empezar.classList.remove('oculto')
    }
}

function ponerClaseDeEstado(elemento, correcto) {
    quitarClaseDeEstado(elemento)
    if(correcto) elemento.classList.add('correcto')
    else elemento.classList.add('incorrecto')
}

function quitarClaseDeEstado(elemento) {
    elemento.classList.remove('correcto')
    elemento.classList.remove('incorrecto')
}

const preguntas = [
	{
		pregunta: "Cuanto es 2 + 2?",
		respuestas: [
			{ texto: "4", correcto: true },
			{ texto: "22", correcto: false },
		],
	},
	{
		pregunta: "Cuanto es 2 - 2?",
		respuestas: [
            { texto: "1", correcto: false },
			{ texto: "0", correcto: true },
		],
	},
	{
		pregunta: "Cuanto es 2 * 2?",
		respuestas: [
			{ texto: "6", correcto: false },
			{ texto: "4", correcto: true },
		],
	},
	{
		pregunta: "Cuanto es 2 / 2?",
		respuestas: [
			{ texto: "1", correcto: true },
			{ texto: "0", correcto: false },
		],
	},
	{
		pregunta: "El Desarrollo Web es Divertido?",
		respuestas: [
			{ texto: "Si!!!", correcto: true },
			{ texto: "Que va!", correcto: false },
			{ texto: "Para nada!", correcto: false },
			{ texto: "Por Supuesto!!!", correcto: true },
		],
	},
	{
		pregunta: "Cual es un Navegador web?",
		respuestas: [
			{ texto: "Chome", correcto: false },
			{ texto: "Edge", correcto: true },
			{ texto: "FiredFox", correcto: false },
			{ texto: "Googgllee", correcto: false },
		],
	},
	{
		pregunta: "Cual no se usa en el Desarrollo Web?",
		respuestas: [
			{ texto: "JavaScript", correcto: false },
			{ texto: "CSS", correcto: false },
			{ texto: "Java", correcto: true },
			{ texto: "HTML", correcto: false },
		],
	},
];
