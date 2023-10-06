const datosQuiz = [
	{
		pregunta: "Cuantos años tiene Florin",
		a: "10",
		b: "17",
		c: "26",
		d: "110",
		correcta: "c",
	},
	{
		pregunta: "Cual es el lenguaje de programacion mas usado en 2019",
		a: "Java",
		b: "C",
		c: "Python",
		d: "JavaScript",
		correcta: "a",
	},
	{
		pregunta: "Cual es el precidente de Estados Unidos",
		a: "Florin Pop",
		b: "Donald Trump",
		c: "Ivan Saldano",
		d: "Mihai Andrei",
		correcta: "b",
	},
	{
		pregunta: "Que significan las siglas HTML?",
		a: "Hypertext Markup Language",
		b: "Cascading Style Sheet",
		c: "Jason Object Notation",
		d: "Helicopters Terminals Motorboats Lamborginis",
		correcta: "a",
	},
	{
		pregunta: "En que año se lanzo JavaScript",
		a: "1996",
		b: "1995",
		c: "1994",
		d: "Ninguno de los anteriores",
		correcta: "b",
	},
];

const quiz = document.getElementById("quiz");
const respuestas = document.querySelectorAll(".respuesta");
const pregunta = document.getElementById("pregunta");
const a_texto = document.getElementById("a_texto");
const b_texto = document.getElementById("b_texto");
const c_texto = document.getElementById("c_texto");
const d_texto = document.getElementById("d_texto");
const botonEnviar = document.getElementById("enviar");

let quizActual = 0;
let puntuacion = 0;

cargarQuiz();

function cargarQuiz() {
	deseleccionarRespuestas();
	const datosQuizActual = datosQuiz[quizActual];
	pregunta.textContent = datosQuizActual.pregunta;
	a_texto.textContent = datosQuizActual.a;
	b_texto.textContent = datosQuizActual.b;
	c_texto.textContent = datosQuizActual.c;
	d_texto.textContent = datosQuizActual.d;
}

function deseleccionarRespuestas() {
	respuestas.forEach((respuestaE) => {
		respuestaE.checked = false;
	});
}

function obtenerSeleccion() {
	let respuesta = undefined;

	respuestas.forEach((respuestaE) => {
		if (respuestaE.checked) respuesta = respuestaE.id;
	});
	return respuesta;
}

botonEnviar.addEventListener("click", () => {
	const respuesta = obtenerSeleccion();

	if (!respuesta) return;

	if (respuesta === datosQuiz[quizActual].correcta) puntuacion++;

	quizActual++;

	if (quizActual < datosQuiz.length) cargarQuiz();
	else {
		quiz.innerHTML = `
			<h2>Respondiste Correctamente a ${puntuacion}/${datosQuiz.length} preguntas.</h2> 
			<button onClick="location.reload()">Volver a Intentarlo</button>
		`;
	}
});
