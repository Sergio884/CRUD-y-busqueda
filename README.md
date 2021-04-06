# CRUD y busqueda
## Tecnologías utilizadas:
1. NODE.js
2. HTML
3. Mysql
4. CSS
5. Javascript

# CRUD
* **Create** (crear)
* **Read** (Leer)
* **Update** (Actulizar)
* **Delete** (Borrar)

## Para usar el proyecto debemos de crear una tabla de la siguiente forma:

CREATE TABLE crud{
    id int primary key NOT NULL auto_increment,
    nombre varchar(100) NOT NULL,
    fecha datetime NOT NULL
}

        * user: 'root',
        * password: '',
        * database: 'crud',
        * port: '3307'