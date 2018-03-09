$( document ).ready(function() {
    console.log('Antes de la petición');
    $.get('https://reqres.in/api/users').then( 
        (respuesta) => {
            console.log('dentro del then');
            console.log(respuesta);
        });
    console.log('después de la petición');
});

// $( document ).ready(function() {
//     console.log('Antes de la petición');
//     fetch('https://reqres.in/api/users').then( 
//         (respuesta) => {
//             console.log('dentro del then');
//             console.log(respuesta);
//         });
//     console.log('después de la petición');
// });