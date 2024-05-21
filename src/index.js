require('dotenv').config()
const express = require('express')
const { connectToDatabase } = require('./db/database-connection')
const personagemRouter = require('./personagem/personagem.router')
//const { MongoClient, ObjectId } = require('mongodb')



// Declaramos a funcao main()
async function main() {
// FIX: Utilizar o connectToDatabase() e receber o DB
    await connectToDatabase()

    //const collection = db.collection('personagem')

    const app = express()

    //Middlewares
    //Sinaliza para o Express que estamos usando JSON no Body
    app.use(express.json())

    app.get('/', function (req, res) {
        res.send('Hello World!')
    })

    app.use('/personagem', personagemRouter)

    app.listen(3000, function () {
        console.log('Aplicação rodando em http://localhost:3000')
    })
}

// Executamos a funcao main()
main()