require("express-async-errors")
const database = require("./database/sqlite/index.js")

const express = require("express");

const routes = require("./routes/index");
const AppError = require("./utils/appError");

const app = express();

app.use(express.json());
app.use(routes);

database();

app.use(( error, request, response, next ) => {
    
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "Error",
            message: error.message
        })
    }

    console.error(error)

    return response.status(500).json({
        status: "Error",
        message: "Internal error"
    }) 
});

const PORT = 3332;

app.listen (PORT, () => console.log(`Server is running on port ${PORT}`))