/*
 * Script que se encarga de poblar la base de datos  
 * 
 */

print("STARTING SCRIPT");
//Host donde está nuestra base de datos, no tiene que ser nuestro equipo local, puede ser cualquier mongoDb.
conn = new Mongo("localhost");
//Nombre de la base de datos que vamos a utilizar
db = conn.getDB("dbgrupo7_usuarios");

/*coleciones de nuestro modelo de datos*/
db.createCollection("users");
/* users */
print("***********creating users*********");
db.users.insert({
  
"name" : "Antuan",
"surname" : "Martín"
});

db.users.insert(  {
  
"name" : "Felime",
"surname" : "Rodriguez"
});
db.users.insert( {
  
"name" : "Jose",
"surname" : "Carrizo"
});
db.users.insert( {
  
    "name" : "Jose",
    "surname" : "Carrizo"
});
db.users.insert( {
  
    "name" : "Jose",
    "surname" : "Carrizo"
});
db.users.insert( {
  
    "name" : "Antuan",
    "surname" : "Martín"
});   
db.users.insert( {
      
    "name" : "Felime",
    "surname" : "Rodriguez"
});
db.users.insert( {
      
    "name" : "Jose",
    "surname" : "Carrizo"
    });
db.users.insert( {
      
    "name" : "Jose",
    "surname" : "Carrizo"        
    });
db.users.insert( {
    "name" : "Jose",
    "surname" : "Carrizo"
});
db.users.insert( {
  
    "name" : "Antuan",
    "surname" : "Martín"
    });
    
    db.users.insert( {
      
    "name" : "Felime",
    "surname" : "Rodriguez"
    });
    db.users.insert( {
      
    "name" : "Jose",
    "surname" : "Carrizo"
    });
    db.users.insert( {
      
        "name" : "Jose",
        "surname" : "Carrizo"
    });
    db.users.insert( {
      
        "name" : "Jose",
        "surname" : "Carrizo"
    });
    db.users.insert( {
      
        "name" : "Antuan",
        "surname" : "Martín"
    });   
    db.users.insert( {
          
        "name" : "Felime",
        "surname" : "Rodriguez"
    });
    db.users.insert( {
          
        "name" : "Jose",
        "surname" : "Carrizo"
        });
    db.users.insert( {
          
        "name" : "Jose",
        "surname" : "Carrizo"        
        });
    db.users.insert( {
        "name" : "Jose",
        "surname" : "Carrizo"
});
db.users.insert( {
  
    "name" : "Antuan",
    "surname" : "Martín"
    });
    
    db.users.insert( {
      
    "name" : "Felime",
    "surname" : "Rodriguez"
    });
    db.users.insert( {
      
    "name" : "Jose",
    "surname" : "Carrizo"
    });
    db.users.insert( {
      
        "name" : "Jose",
        "surname" : "Carrizo"
    });
    db.users.insert( {
      
        "name" : "Jose",
        "surname" : "Carrizo"
    });
    db.users.insert( {
      
        "name" : "Antuan",
        "surname" : "Martín"
    });   
    db.users.insert( {
          
        "name" : "Felime",
        "surname" : "Rodriguez"
    });
    db.users.insert( {
          
        "name" : "Jose",
        "surname" : "Carrizo"
        });
    db.users.insert( {
          
        "name" : "Jose",
        "surname" : "Carrizo"      
        });
    db.users.insert( {
        "name" : "Jose",
        "surname" : "Carrizo"
    });
    db.users.insert( {
  
        "name" : "Antuan",
        "surname" : "Martín"
        });
        
        db.users.insert( {
          
        "name" : "Felime",
        "surname" : "Rodriguez"
        });
        db.users.insert( {
          
        "name" : "Jose",
        "surname" : "Carrizo"
        });
        db.users.insert( {
          
            "name" : "Jose",
            "surname" : "Carrizo"
        });
        db.users.insert( {
          
            "name" : "Jose",
            "surname" : "Carrizo"
        });
        db.users.insert( {
          
            "name" : "Antuan",
            "surname" : "Martín"
        });   
        db.users.insert( {
              
            "name" : "Felime",
            "surname" : "Rodriguez"
        });
        db.users.insert( {
              
            "name" : "Jose",
            "surname" : "Carrizo"
            });
        db.users.insert( {
              
            "name" : "Jose",
            "surname" : "Carrizo"        
            });
        db.users.insert( {
            "name" : "Jose",
            "surname" : "Carrizo"
        });
        db.users.insert( {
  
            "name" : "Antuan",
            "surname" : "Martín"
            });
            
            db.users.insert( {
              
            "name" : "Felime",
            "surname" : "Rodriguez"
            });
            db.users.insert( {
              
            "name" : "Jose",
            "surname" : "Carrizo"
            });
            db.users.insert( {
              
                "name" : "Jose",
                "surname" : "Carrizo"
            });
            db.users.insert( {
              
                "name" : "Jose",
                "surname" : "Carrizo"
            });
            db.users.insert( {
              
                "name" : "Antuan",
                "surname" : "Martín"
            });   
            db.users.insert( {
                  
                "name" : "Felime",
                "surname" : "Rodriguez"
            });
            db.users.insert( {
                  
                "name" : "Jose",
                "surname" : "Carrizo"
                });
            db.users.insert( {
                  
                "name" : "Jose",
                "surname" : "Carrizo"       
                });
            db.users.insert( {
                "name" : "Jose",
                "surname" : "Carrizo"
        
            });
            db.users.insert( {
  
                "name" : "Antuan",
                "surname" : "Martín"
                });
                
                db.users.insert( {
                  
                "name" : "Felime",
                "surname" : "Rodriguez"
                });
                db.users.insert( {
                  
                "name" : "Jose",
                "surname" : "Carrizo"
                });
                db.users.insert( {
                  
                    "name" : "Jose",
                    "surname" : "Carrizo"
                });
                db.users.insert( {
                  
                    "name" : "Jose",
                    "surname" : "Carrizo"
                });
                db.users.insert( {
                  
                    "name" : "Antuan",
                    "surname" : "Martín"
                });   
                db.users.insert( {
                      
                    "name" : "Felime",
                    "surname" : "Rodriguez"
                });
                db.users.insert( {
                      
                    "name" : "Jose",
                    "surname" : "Carrizo"
                    });
                db.users.insert( {
                      
                    "name" : "Jose",
                    "surname" : "Carrizo"       
                    });
                db.users.insert( {
                    "name" : "Jose",
                    "surname" : "Carrizo"
                });
                db.users.insert( {
                  
                    "name" : "Antuan",
                    "surname" : "Martín"
                    });
                    
                    db.users.insert( {
                      
                    "name" : "Felime",
                    "surname" : "Rodriguez"
                    });
                    db.users.insert( {
                      
                    "name" : "Jose",
                    "surname" : "Carrizo"
                    });
                    db.users.insert( {
                      
                        "name" : "Jose",
                        "surname" : "Carrizo"
                    });
                    db.users.insert( {
                      
                        "name" : "Jose",
                        "surname" : "Carrizo"
                    });
                    db.users.insert( {
                      
                        "name" : "Antuan",
                        "surname" : "Martín"
                    });   
                    db.users.insert( {
                          
                        "name" : "Felime",
                        "surname" : "Rodriguez"
                    });
                    db.users.insert( {
                          
                        "name" : "Jose",
                        "surname" : "Carrizo"
                        });
                    db.users.insert( {
                          
                        "name" : "Jose",
                        "surname" : "Carrizo"       
                        });
                    db.users.insert( {
                        "name" : "Jose",
                        "surname" : "Carrizo"
                });
                db.users.insert( {
                  
                    "name" : "Antuan",
                    "surname" : "Martín"
                    });
                    
                    db.users.insert( {
                      
                    "name" : "Felime",
                    "surname" : "Rodriguez"
                    });
                    db.users.insert( {
                      
                    "name" : "Jose",
                    "surname" : "Carrizo"
                    });
                    db.users.insert( {
                      
                        "name" : "Jose",
                        "surname" : "Carrizo"
                    });
                    db.users.insert( {
                      
                        "name" : "Jose",
                        "surname" : "Carrizo"
                    });
                    db.users.insert( {
                      
                        "name" : "Antuan",
                        "surname" : "Martín"
                    });   
                    db.users.insert( {
                          
                        "name" : "Felime",
                        "surname" : "Rodriguez"
                    });
                    db.users.insert( {
                          
                        "name" : "Jose",
                        "surname" : "Carrizo"
                        });
                    db.users.insert( {
                          
                        "name" : "Jose",
                        "surname" : "Carrizo"       
                        });
                    db.users.insert( {
                        "name" : "Jose",
                        "surname" : "Carrizo"
                    });
                    db.users.insert( {
                  
                        "name" : "Antuan",
                        "surname" : "Martín"
                        });
                        
                        db.users.insert( {
                          
                        "name" : "Felime",
                        "surname" : "Rodriguez"
                        });
                        db.users.insert( {
                          
                        "name" : "Jose",
                        "surname" : "Carrizo"
                        });
                        db.users.insert( {
                                                    
                            "name" : "Jose",
                            "surname" : "Carrizo"
                        });
                        db.users.insert( {
                          
                            "name" : "Jose",
                            "surname" : "Carrizo"
                        });
                        db.users.insert( {
                          
                            "name" : "Antuan",
                            "surname" : "Martín"
                        });   
                        db.users.insert( {
                              
                            "name" : "Felime",
                            "surname" : "Rodriguez"
                        });
                        db.users.insert( {
                              
                            "name" : "Jose",
                            "surname" : "Carrizo"
                            });
                        db.users.insert( {
                              
                            "name" : "Jose",
                            "surname" : "Carrizo"      
                            });
                        db.users.insert( {
                            "name" : "Jose",
                            "surname" : "Carrizo"
                        });
                        db.users.insert( {
                  
                            "name" : "Antuan",
                            "surname" : "Martín"
                            });
                            
                            db.users.insert( {
                              
                            "name" : "Felime",
                            "surname" : "Rodriguez"
                            });
                            db.users.insert( {
                              
                            "name" : "Jose",
                            "surname" : "Carrizo"
                            });
                            db.users.insert( {
                              
                                "name" : "Jose",
                                "surname" : "Carrizo"
                            });
                            db.users.insert( {
                              
                                "name" : "Jose",
                                "surname" : "Carrizo"
                            });
                            db.users.insert( {
                              
                                "name" : "Antuan",
                                "surname" : "Martín"
                            });   
                            db.users.insert( {
                                  
                                "name" : "Felime",
                                "surname" : "Rodriguez"
                            });
                            db.users.insert( {
                                  
                                "name" : "Jose",
                                "surname" : "Carrizo"
                                });
                            db.users.insert( {
                                  
                                "name" : "Jose",
                                "surname" : "Carrizo"      
                                });
                            db.users.insert( {
                                "name" : "Jose",
                                "surname" : "Carrizo"
                            });
print("SCRIPT FINISHED");