'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Code Started (<small>Empieza el código síncrono</small>)<br/>');

    // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
    let p1 = new Promise(
        // The resolver function is called with the ability to resolve or
        // reject the promise
       (resolve, reject) => {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Dentro de la promesa, antes del timeout (<small>Empieza el código asíncrono</small>)<br/>');
            // This is only an example to create asynchronism
            window.setTimeout(
                function() {
                    // We fulfill the promise !
                    resolve(thisPromiseCount);
                }, Math.random() * 4000 + 1000);
        }
    );

    // We define what to do when the promise is resolved with the then() call,
    // and what to do when the promise is rejected with the catch() call
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
