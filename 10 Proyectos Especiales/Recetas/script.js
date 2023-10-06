function obtenerComidaAleatoria() {
	fetch("https://www.themealdb.com/api/json/v1/1/random.php");
}

function obtenerComidaPorID(ID) {
	fetch("www.themealdb.com/api/json/v1/1/lookup.php?i=" + ID);
}

function obtenerComidaPorBusqueda(texto) {
	fetch("www.themealdb.com/api/json/v1/1/search.php?s=" + texto);
}
