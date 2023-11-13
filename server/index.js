const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/Schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();


connectDB();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql:true,
  })
);

app.listen(port, console.log(`Server running on port ${port}`));