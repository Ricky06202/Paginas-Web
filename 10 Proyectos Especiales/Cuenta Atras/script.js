const diasE = document.getElementById("dias");
const horasE = document.getElementById("horas");
const minutosE = document.getElementById("minutos");
const segundosE = document.getElementById("segundos");

const añoNuevo = "1/1/2024";

function cuentraAtras() {
	const fechaAñoNuevo = new Date(añoNuevo);
	const fechaActual = new Date();

	const segundosTotales = (fechaAñoNuevo - fechaActual) / 1000;

	const dias = Math.floor(segundosTotales / 3600 / 24);
	const horas = Math.floor(segundosTotales / 3600) % 24;
	const minutos = Math.floor(segundosTotales / 60) % 60;
	const segundos = Math.floor(segundosTotales) % 60;

	diasE.textContent = formatoTiempo(dias);
	horasE.textContent = formatoTiempo(horas);
	minutosE.textContent = formatoTiempo(minutos);
	segundosE.textContent = formatoTiempo(segundos);
}

function formatoTiempo(tiempo) {
	return tiempo < 10 ? `0${tiempo}` : tiempo
}

cuentraAtras();

setInterval(cuentraAtras, 1000);
