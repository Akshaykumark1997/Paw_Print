const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// eslint-disable-next-line import/no-extraneous-dependencies
// const fileUpload = require('express-fileupload');
const users = require('./Routes/User');
const Admin = require('./Routes/Admin');
const Employee = require('./Routes/Employee');
const dbconnect = require('./config/Connections');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dbconnect.dbconnect();
// app.use(fileUpload());

app.use('/api', users);
app.use('/api/admin', Admin);
app.use('/api/employee', Employee);

app.listen(process.env.PORTNO, () => {
  console.log('server started listening to port');
});
