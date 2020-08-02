const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')
const sslRedirect = require('heroku-ssl-redirect');

const PORT = process.env.PORT || 4000;

const app = express()
app.use(sslRedirect())
const connexionRoutes = express.Router()
const userRoutes = express.Router()

const mongoDB = 'mongodb://127.0.0.1/connexions';
mongoose.connect(process.env.MONGODB_URI || mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once("open", ()=> {
	console.log("MongoDB connection establishd")
})

let Connexion = require("./Models/Connexions.model")
let User = require("./Models/User.model");

app.use(bodyParser.json())

connexionRoutes.route("/").get((req, res) => {
	Connexion.find((err, connexion) => {
		if(!connexion){
			res.status(400)
			console.log(err)
			console.log("Database not found")
		}
		else{
			res.json(connexion)
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

connexionRoutes.route("/query").post((req, res) => {
	let query = req.body;
	Connexion.find(query, (err, connexion) => {
		if(!connexion){
			res.status(400)
			console.log(err)
			console.log("Database not found")
		}
		else{
			res.json(connexion)
		}
	})
})
connexionRoutes.route('/edit/:id').get((req, res) => {
	Connexion.findById(req.params.id,(error, data) => {
		if (error){
			return next(error)
		} else {
			res.json(data)
		}
	})
})
connexionRoutes.route('/update/:id').put((req, res, next) => {
	Connexion.findByIdAndUpdate(req.params.id, {
		$set: req.body
	}, (error, data) => {
		if (error){
			return next(error);
			console.log(error)
		} else {
			res.json(data)
			console.log('Record updated successfully')
		}
	})
})

userRoutes.route("/topten").get((req, res) => {
	User.find().sort({score: -1}).limit(10)
		.then(users => {
			res.status(200).json(users)
		})
		.catch(err => {
			res.status(400).send("records not found")
			console(err)
			console.log("Records not found")
		})
})

userRoutes.route("/add").post((req, res) => {
	let user = new User(req.body)

	user.save()
	.then((user) => {
		res.status(200).send("User added successfully")
	})
	.catch(err => {
		res.status(400).send("User was not added")
		console.log("User was not added")
		console.log(err)
	})
})

userRoutes.route("/query").post((req, res) => {
	let query = req.body;
	User.find(query, (err, user) => {
		if(!user){
			res.status(400)
			console.log(err)
			console.log("Database not found")
		}
		else{
			res.json(user)
		}
	})
})

userRoutes.route('/update/:id').put((req, res) => {
	User.findByIdAndUpdate(req.params.id, {$set: req.body})
	.then(user => {
		res.status(200).send("record updated successfully")
		console.log("record updated successfully")
	})
	.catch(err => {
		res.status(400).send("not updated")
		console.log("not updated")
	})
})

app.use("/connexions", connexionRoutes)
app.use("/users", userRoutes)


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