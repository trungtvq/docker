db.createUser(
 { 
  user: "trung",
  pwd: "password",
  roles: [ 
    { 
      role: "readWrite",
      db: "my_db"
    }
  ]
 }
)
