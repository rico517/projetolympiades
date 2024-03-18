import mysql from 'mysql';

function createCnx(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'projetolympiadls'
    });
}

export function testCnx(){
    createCnx().connect(
        function(err:Error) {
            if (err) throw err;
            console.log('Connected!');
    });
}