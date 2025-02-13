//documents the available API endpoints
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Express API Documentation",
            version: "1.0.0",
            description: "API documentation for the Express project",
        },
        servers: [
            {
                url: "http://localhost:4000"
            },
        ],
    },
    apis: ["./routes/*.js"], // Path to API route files
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

const swaggerSetup = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerSetup;