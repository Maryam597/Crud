// importation des dépendances express, body parser et cors 
require('dotenv').config();
const express = require('express');   
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.route');
const cors = require('cors');

// Connexion à la base de données 
const connectDB = require('./config/db');

// Middlewares
const app = express(); // app est égale à express, tout ce qu'il y a dans la config express

// use app Express
app.use(express.json()); // app.use --> utilisation

// use bodyParse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // urlencoded : pr laisser l'url tel qu'il est 

//use cors
app.use(
    cors({
    origin: 'http://localhost:5501', // url du client --> donne l'autorisation d'accès au client 
    optionSuccessStatus: 200, 
})
);

//Routes 
app.use('/', userRoutes);

// Ecrire bonjour dans le navigateur
app.get('/', (req, res) => {
    res.send('Hello World of Boredom')
})

// Configuration et lancement du serveur 
const start = async () => {   // fonction fléchée 
    try {
        await connectDB();
        const port = process.env.PORT || 5500; // port de base OU bien port de secours 
        app.listen(port, () => {
            console.log(`Le serveur a démarré sur le port ${port}`);
        })
    } catch {
        console.log(`Erreur lors du démarrage du serveur`);
    }
}; 

start(); 