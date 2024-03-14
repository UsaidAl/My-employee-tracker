const mysql = require('mysql2/promise');

const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'Usaid.123',
      database: 'employees_db'
    },
    
  );

  connection.connect(function(err){
    if (err) throw err
  })

  module.exports = connection