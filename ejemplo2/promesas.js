'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Code Started (<small>Empieza el código síncrono</small>)<br/>');

    // Construimos la promesa, con su algoritmo que tardará un tiempo en resolverse o rechazarse
    let p1 = new Promise(
       (resolve, reject) => {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Dentro de la promesa, antes del timeout (<small>Empieza el código asíncrono</small>)<br/>');

            window.setTimeout(
                function() {
                    // En este momento resolvemos la promesa
                    resolve(thisPromiseCount);
                }, Math.random() * 4000 + 1000);
        }
    );

    // Para defnir lo que queremos hacer si la promesa se resuelve, llamamos al método then()
    // y para definir lo que queremos hacer si la promesa se rechaza, llamamos al método catch()
    p1.then(
        // Log the fulfillment value
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Código dentro del then (<small>Código asíncrono terminado</small>)<br/>');
        })
    .catch(
        // Log the rejection reason
       (reason) => {
            console.log('Handle rejected promise ('+reason+') here.');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Código debajo del then (<small>Código síncrono terminado</small>)<br/>');
}

$( document ).ready(function() {
  if ("Promise" in window) {
    let btn = document.getElementById("btn");
    btn.addEventListener("click",testPromise);
  } else {
    log = document.getElementById('log');
    log.innerHTML = "Tu navegador no soporta Promesas.";
  }    
});
