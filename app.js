const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const vms = require('./routes/vms')
//const swaggerJsDoc = require('swagger-jsdoc')
//const swaggerUI = require('swagger-ui-express')

app.use(morgan('short'));
app.use('/api/vms', vms)

// This is for swagger...will do when i can pay more attention
//const options = {
//    definition: {
//      openapi: "3.0.0",
//      info: {
//        title: "Library API",
//        version: "1.0.0",
//        description: "A simple Express Library API",
//        termsOfService: "http://example.com/terms/",
//        contact: {
//          name: "API Support",
//          url: "http://www.exmaple.com/support",
//          email: "support@example.com",
//        },
//      },
//  
//      servers: [
//        {
//          url: "http://localhost:4001",
//          description: "My API Documentation",
//        },
//      ],
//    },
//    apis: ["./routes/*.js"],
//  };
//  
//  const specs = swaggerJsDoc(options);
//  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.get('/', (req, res) => {
    res.send({message: "Hello World!"});
});
;
app.listen(port, () => {
    console.log(`Example app listneing on port ${port}`);
});