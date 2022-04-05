const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors')


const userRoutes=require('./routes/userRoute');
const businessRoutes=require('./routes/buisinessRoute');
const userRoute=require('./routes/userRoute');

const port=process.env.PORT ;
app.listen(port);

require('./Db/db');
app.use(cors());
app.use('/api',userRoutes);
app.use('/api',businessRoutes);
app.use('/api',userRoute);


