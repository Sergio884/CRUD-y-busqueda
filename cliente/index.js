document.addEventListener('DOMContentLoaded',function(){
    cargarTablaHTML([]);
})

function cargarTablaHTML(data){
    const tabla = document.querySelector('table tbody');

    if(data.length === 0){
        tabla.innerHTML= "<tr><td class='vacio' colspan='5'>Tabla Vacia</td></tr>"
    }
}