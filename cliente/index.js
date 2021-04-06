document.addEventListener('DOMContentLoaded',function (){
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
});

const addBtn = document.querySelector('#agregar-btn');

addBtn.onclick = function(){
    const nameInput = document.querySelector('#nombre-input');
    const name = nameInput.value;
    nameInput = "";

    fetch('http://localhost:5000/insert', {
        headers:{
            'Content-type' : 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({name:name})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));
}

function insertRowIntoTable(data){

}

function loadHTMLTable(data){
    const table = document.querySelector('table tbody');

    console.log(data);

    if(data.length === 0){
        table.innerHTML= "<tr><td class='vacio' colspan='5'>Tabla Vacia</td></tr>";
    }
}

