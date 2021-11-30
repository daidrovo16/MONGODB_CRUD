//Host donde está nuestra base de datos, no tiene que ser nuestro equipo local, puede ser cualquier mongoDb.
conn = new Mongo("localhost");
//Nombre de la base de datos que vamos a utilizar
db = conn.getDB("dbgrupo7_usuarios");

//PROCESO PARA LA ELIMINACION DE REGISTROS
for(var i = 1; i<=70; i++){
    db.users.deleteOne({})
}