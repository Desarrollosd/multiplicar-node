const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`Alguno de los parámetros no es un numero.`);
            return;
        }

        let data = '';

        console.log('================='.green);
        console.log(`Tabla de ${base}`.yellow);
        console.log('================='.red);

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${(base * i)}\n`;
        }

        console.log(data);

        resolve(`tabla-${base} mostrada con éxito`);

    });
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`Alguno de los parámetros no es un numero.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${(base * i)}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}