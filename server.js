const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')
const sslRedirect = require('heroku-ssl-redirect');

const PORT = process.env.PORT || 4000;

const app = express()
app.use(sslRedirect())
const connexionRoutes = express.Router()

const mongoDB = 'mongodb://127.0.0.1/connexions';
mongoose.connect(process.env.MONGODB_URI || mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once("open", ()=> {
    console.log("MongoDB connection establishd")
})

let Connexion = require("./Connexions.model")

app.use(bodyParser.json())

connexionRoutes.route("/").get((req, res) => {
    Connexion.find((err, connexion) => {
        if(!connexion){
            res.status(400)
            console.log(err)
            console.log("Database not found")
        }
        else{
           return res.json(connexion)
        }
    })
})

connexionRoutes.route("/add").post((req, res) => {
    let connexion = new Connexion(req.body)

    connexion.save()
    .then((connexion) => {
        res.status(200).send("Connexion added successfully")
    })
    .catch(err => {
        res.status(400).send("Connexion was not added")
        console.log("Connexion was not added")
        console.log(err)
    })
})

app.use("/connexions", connexionRoutes)


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
  }

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  
  app.use(express.urlencoded({
    extended: false
  }));
  

app.listen(PORT, () => {
    console.log("MongoDB running on PORT: " + PORT);
  });