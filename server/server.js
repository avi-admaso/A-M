const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors')
app.use(cors());

const port=process.env.PORT ;
app.listen(port);
require('./Db/db');

