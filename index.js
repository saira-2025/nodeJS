// création du serveur
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
 
const router = require("./app/routes/routes");
 
 
// crée un port
// const PORT = 3000;
const PORT = process.env.PORT || 3000;
 
//Pour utiliser la méthode Router()
app.use(router);
 
//utilisation de ejs
app.set('view engine' , 'ejs');
//indiquer à express ou trouver le vues
app.set('views', __dirname + '/app/views') ;
 
//affiche où trouver les fichiers statiques
 app.use(express.static(__dirname + '/public'))

// fonction qui demarera l'application lorsque le port est solicité
app.listen(PORT , ()=>{
    console.log(`le serveur est démarré sur le port : http://localhost:${PORT}`);
   
})
 