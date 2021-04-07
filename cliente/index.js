document.addEventListener('DOMContentLoaded',function (){
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
});

const addBtn = document.querySelector('#agregar-btn');

addBtn.onclick = function(){
    const nameInput = document.querySelector('#nombre-input');
    const name = nameInput.value;
    nombreInput = "";

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
    console.log(data)
    const table = document.querySelector('table tbody');
    const isTableData = table.querySelector('.no-data');

    let tableHTML = "<tr>";

    for(var key in data){
        if(data.hasOwnProperty(key)){
            if(key==='date'){
                data[key]= new Date(data[key].toLocaleString());
            }
            tableHTML += `<td>${data[key]}</td>`;
        }
    }

    tableHTML += `<td><button class="delete-btn" data-id=${id}>Borrar</td>`;
    tableHTML += `<td><button class="edit-btn" data-id=${id}>Editar</td>`;
    tableHTML = "</tr>";

    if(isTableData){
        table.innerHTML = tableHTML;
    }else{
        const newRow = table.insertRow();
        newRow = table.innerHTML;
    }
}

function loadHTMLTable(data){
    const table = document.querySelector('table tbody');

    console.log(data);

    if(data.length === 0){
        table.innerHTML= "<tr><td class='no-data' colspan='5'>Tabla Vacia</td></tr>";
        return;
    }
    let tableHTML = "";
    data.forEach(function ({id,name,date}) {
        tableHTML += "<tr>";
        tableHTML += `<td>${id}</td>`;
        tableHTML += `<td>${name}</td>`;
        tableHTML += `<td>${new Date(date).toLocaleString()}</td>`
        tableHTML += `<td><button class="delete-btn" data-id=${id}>Borrar</td>`;
        tableHTML += `<td><button class="edit-btn" data-id=${id}>Editar</td>`;
        tableHTML += "</tr>";
    });

    table.innerHTML = tableHTML;
}

