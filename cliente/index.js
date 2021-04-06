document.addEventListener('DOMContentLoaded',function (){
    fetch('http://localhost:5000/getAll')
    .then(response=>response.json())
    .then(data=> console.log(data));
    cargarTablaHTML([]);
});

function cargarTablaHTML(data){
    const table = document.querySelector('table tbody');

    if(data.length === 0){
        table.innerHTML= "<tr><td class='vacio' colspan='5'>Tabla Vacia</td></tr>";
    }
}

