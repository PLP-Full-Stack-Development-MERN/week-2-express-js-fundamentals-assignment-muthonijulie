const express=require('express');
const app=express();
const logger=require("./middleware/logger")
const swaggerSetup=require("./swagger")
require("dotenv").config();

const mongodb_connection=require('mongoose');
const User=require('./Models/User');
const Product=require('./Models/Product');

const port_number=process.env.PORT ||4000;

mongodb_connection.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB is connected successfully'))
.catch(err=>console.log("There is connection error",err))

//using middleware globally
app.use(logger);
app.use(express.json());

swaggerSetup(app);

//routes
//importing routes
const userRoute=require("./routes/userRoutes");
const productRoute=require("./routes/productRoutes");
//use routes
app.use("/users",userRoute);
app.use("/products",productRoute);

app.get('/',(req,res)=>{
    res.send('Hello there!');
});
//test route that triggers an error
app.get('/error-test', (req, res, next) => {
    next(new Error("This is a test error!"));
});

// Global Error Handler
function errorHandler(err, req, res, next) {
    console.error('Error occurred:', err.stack); 

    const statusCode = err.status || 500;
    const errorMessage = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        error: errorMessage,
    });
}

//Attaches the error handler AFTER all routes
app.use(errorHandler);

app.listen(port_number,()=>{
    console.log(`Server is running on http://localhost:${port_number}`);
     console.log(`API Docs available at http://localhost:${port_number}/api-docs`);
})