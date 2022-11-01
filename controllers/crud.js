//Invocamos a conexão do DB
const conexao = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const name = req.body.name;
    const tipo = req.body.tipo;
    const data = req.body.data;
    conexao.query(
        'INSERT INTO users(id, name, tipo, data) VALUES($1, $2, $3, $4)',
        [GeradorID(name, tipo, data), name, tipo, data],
        (error, results) => {
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};

// //Atualizar o registro
exports.update = (req, res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const tipo = req.body.tipo;
    const data = req.body.data;
    conexao.query(
        'UPDATE users SET name=$1, tipo=$2, data=$3, id=$4  WHERE id=$4',
        [name, tipo, data, id],
        (error, results) => {
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};

function GeradorID(name, tipo, data) {
    return Number(name.toString().length) + Number(tipo.toString().length) + Number(data.toString().length)
}
