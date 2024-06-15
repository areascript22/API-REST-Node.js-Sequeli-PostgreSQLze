const express = require("express");
const bodyParser = require('body-parser'); 
const routes = require("./routes/routes");
const sequelize = require("./config/database");


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Import routes
routes(app);

// Welcome route
app.get('/', (req, res) => {
    res.send("Bienvenido a node.js");
});

//Create table "Movie" if it doesn´t exist in database
sequelize.sync().then(()=>{
    // Run server
    app.listen(PORT, () => {
        console.log("Server listening on PORT:", PORT);
    });
}).catch((error)=>{
    console.log("Error to sync database: ",error);
});






 
