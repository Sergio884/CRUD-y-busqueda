document.addEventListener('DOMContentLoaded',function (){
    fetch('http://localhost:5000/getAll')
    .then(response=>response.json())
    .then(data=> loadHTMLTable(data['data']));
});

function loadHTMLTable(data){
    const table = document.querySelector('table tbody');

    console.log(data);

    if(data.length === 0){
        table.innerHTML= "<tr><td class='vacio' colspan='5'>Tabla Vacia</td></tr>";
    }
}

