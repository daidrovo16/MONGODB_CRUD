//Host donde está nuestra base de datos, no tiene que ser nuestro equipo local, puede ser cualquier mongoDb.
conn = new Mongo("localhost");
//Nombre de la base de datos que vamos a utilizar
db = conn.getDB("dbgrupo7_usuarios");
var allRecords = db.users.find();
while(allRecords.hasNext()){
    printjson(allRecords.next());
}