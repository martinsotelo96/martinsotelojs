function ingresarEstadisticas(){
    let jugadores = [];
    let continuar = true;

    while (continuar === true) {
        const nombre = prompt("ingresar nombre del Jugador");
        const cantidad = parseFloat(prompt("Ingresar Numero de Tackles"));

        if (isNaN(cantidad) || cantidad < 0 || cantidad > 40) {
            alert("Ingresar cantidad de tackles reales");
        } else {
            jugadores.push({nombre: nombre, cantidad: cantidad})
        }

        const respuesta = prompt("¿Agregar estadistica de un compañero? Si/No").toLowerCase();
        if (respuesta === "si"){
            continuar = true;
        } else {
            continuar = false;
        }
    }     

    return jugadores;
}

function cantidadTackles(jugadores) {
    const suma = jugadores.reduce((acc, jugador) => acc + jugador.cantidad, 0);
    return suma;
}

function jugadorConMasTackles(jugadores) {
    let mayorCantidad = jugadores[0].cantidad;

    jugadores.forEach(jugador => {
        if (jugador.cantidad > mayorCantidad) {
            mayorCantidad = jugador.cantidad
        }
    });

    let mayores = jugadores.filter((jugador) => jugador.cantidad === mayorCantidad);

    return mayores;
}

function jugadorConMenosTackles(jugadores) {
    let menorCantidad = jugadores[0].cantidad;

    jugadores.forEach(jugador => {
        if (jugador.cantidad < menorCantidad) {
            menorCantidad = jugador.cantidad
        }
    });

    let peores = jugadores.filter((jugador) => jugador.cantidad === menorCantidad);

    return peores;
}

function estadisticasTotales() {
    const jugadores = ingresarEstadisticas();

    if (jugadores.length === 0) {
        console.log("No hay jugadores");
        return;
    }

    const tackles = cantidadTackles(jugadores);
    const mayores = jugadorConMasTackles(jugadores);
    const peores = jugadorConMenosTackles(jugadores);

    console.log("**CANTIDAD DE TACKLES**");
    console.log(tackles);

    console.log("Mayores tackleadores");
    mayores.forEach((jugador) => console.log(jugador.nombre + "cantidad de " + jugador.cantidad));

    console.log("Peores tackleadores");
    peores.forEach((jugador) => console.log(jugador.nombre + "cantidad de " + jugador.cantidad));

}

estadisticasTotales();