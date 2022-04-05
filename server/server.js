const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors')
require('./Db/db');



const userRoutes=require('./routes/userRoute');
const businessRoutes=require('./routes/buisinessRoute');
const userRoute=require('./routes/userRoute');

app.use(cors());

app.use('/api',userRoutes);
app.use('/api',businessRoutes);
app.use('/api',userRoute);

const port=process.env.PORT ;
app.listen(port);



