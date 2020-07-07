const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000
const app = express()
const connexionRoutes = express.Router()

const mongoDB = 'mongodb://127.0.0.1/connexions';
mongoose.connect(process.env.MONGODB_URI || mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once("open", ()=> {
    console.log("MongoDB connection establishd")
})

app.use(bodyParser.json())

let Connexion = require("./Connexions.model")

connexionRoutes.route("/").get((req, res) => {
    Connexion.find((err, connexion) => {
        if(!connexion){
            res.status(400)
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
  
app.use("/connexions", connexionRoutes)

app.listen(PORT, () => {
    console.log("Database running in PORT:" + PORT)
})