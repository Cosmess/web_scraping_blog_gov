const mysql = require('mysql');

const titulo = 'Setor elétrico brasileiro alcança recordes históricos e conquistas em 2021';

const pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'admin',
    password:'123456',
    database:'blog'
});

const consulta = (msg)=>{
    pool.getConnection(function(err,connection){
        if(err) throw error;
        connection.query('select * from noticias where titulo = ?',msg,function(error,result,fields){
            let countresult = result.length

            if(countresult===0){
                console.log('TITULO NÃO CADASTRADO!');
            }else{
                console.log('TITULO CADASTRADO!');
                console.log(countresult);
                console.log(result);
            }
            if(error) throw error;
        });
    })
};
consulta(titulo);