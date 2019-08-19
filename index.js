const express = require('express');

// console.log(express); //teste inicial //001

const server = express();

server.get('/teste1', () => {
    console.log("teste1");
    console.log("http://localhost:3000/teste1 -> teste1"); //002
    return "nada";
});

server.get('/teste2', (req, res) => {
    console.log("teste2");
    return res.send('http://localhost:3000/teste2 Hello Word'); //003
});

server.get('/teste3', (req, res) => {
    console.log("teste3");
    return res.json( {url : "http://localhost:3000/teste3", message : 'Json Hello World'}); ///004
});

// Query params = http://localhost:3000/teste4?nome=Leo
server.get('/teste4', (req, res) => {
    console.log("teste4");
    const nome = req.query.nome;
    return res.json({ message: `Hello ${nome}`});
});

// Route params = http://localhost:3000/teste5/1
server.get('/teste5/:id', (req, res) => {
    console.log("teste5");
    const id = req.params.id;
    return res.json({ message: `Teste ID: ${id}`});
});

// Route params = http://localhost:3000/teste5/1
server.get('/teste6/:id', (req, res) => {
    console.log("teste6");
    const { id }= req.params;
    return res.json({ message: `Teste ID: ${id}`});
});

//Video 06 Utilizando INSOMNIA

const nomes = [ 'Leo', 'Diana', 'Agatha'];
server.get('/teste7/:index', (req, res) => {
    console.log("teste7");
    const { index }= req.params;
    return res.json({ message: `Teste index: ${nomes[index]}`});
});

//Video Utilizando Nodemon
// Request body = { "name": "Leo" }
// server.post('/teste8/', (req, res) => {
//     console.log("teste7");
//     const { nome }= req.body;
//     return res.json({ message: `Teste nome: ${nome}`});
// });

server.listen(3000);