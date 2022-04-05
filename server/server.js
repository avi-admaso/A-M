const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const app=express();
const passport = require("passport")
const cors=require('cors')
const userRoutes=require('./routes/userRoute');
const businessRoutes=require('./routes/buisinessRoute');
const appointments=require('./routes/appointmentRoute');
require("./config/passport")(passport)
require('./Db/db');

app.use(cors());
app.use(passport.initialize());
app.use('/api',passport.authenticate("jwt",{session:false}),userRoutes);
app.use('/api',passport.authenticate("jwt",{session:false}),businessRoutes);
app.use('/api',passport.authenticate("jwt",{session:false}),appointments);

const port=process.env.PORT ;
app.listen(port);

``

