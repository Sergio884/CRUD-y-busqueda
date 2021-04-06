document.addEventListener('DOMContentLoaded',function(){
    cargarTablaHTML([]);
});

function cargarTablaHTML(data){
    const table = document.querySelector('table tbody');

    if(data.length === 0){
        table.innerHTML= "<tr><td class='vacio' colspan='5'>Tabla Vacia</td></tr>";
    }
}

