const juagadores = [
    { Jugador: 'jugador_1', n1: 6, n2: 12, n3: 18, n4: 21, n5: 27, n6: 36 },
    { Jugador: 'jugador_2', n1: 9, n2: 16, n3: 24, n4: 28, n5: 36, n6: 8 },
    { Jugador: 'jugador_3', n1: 3, n2: 7, n3: 3, n4: 21, n5: 39, n6: 41 },
    { Jugador: 'jugador_4', n1: 15, n2: 24, n3: 36, n4: 42, n5: 9, n6: 19 },
    { Jugador: 'jugador_5', n1: 18, n2: 28, n3: 42, n4: 14, n5: 3, n6: 23 },
    { Jugador: 'jugador_6', n1: 21, n2: 32, n3: 12, n4: 7, n5: 5, n6: 29 },
    { Jugador: 'jugador_7', n1: 24, n2: 36, n3: 6, n4: 20, n5: 7, n6: 31 },
    { Jugador: 'jugador_8', n1: 27, n2: 40, n3: 5, n4: 25, n5: 9, n6: 32 },
    { Jugador: 'jugador_9', n1: 30, n2: 4, n3: 10, n4: 41, n5: 11, n6: 37 },
    { Jugador: 'jugador_10', n1: 33, n2: 8, n3: 15, n4: 39, n5: 13, n6: 3 }
]

const lista = document.querySelector('#loteria') 
const ganadores = [3, 7, 13, 21, 39, 41]

const ganador = () => {
    let template = '';
    let cant = 0;
    let cant2 = 0;
    for (const juego of juagadores) {
        if (juego.n1 && juego.n2 && juego.n3 &&
            juego.n4 && juego.n5 && juego.n6 in ganadores) {
            template += `
                <div class='articulo'>
                    <p> jugador:${juego.jugador} </p>
                </div>
            `
        } else {
            cant2++
        }
    }
    resultado = document.querySelector('#vencedor')
    resultado.innerHTML = cant;
    resultado2 = document.querySelector('#no_vencedor')
    resultado2.innerHTML = cant2;
    console.log(cant)
    console.log(cant2)
}
lista.innerHTML=ganador();