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
app.use(express.json());
app.use(passport.initialize());
app.use(cors());
app.use('/api',userRoutes);
app.use('/api',businessRoutes);
app.use('/api',appointments);
// app.use('/api',passport.authenticate("jwt",{session:false}),businessRoutes);
// app.use('/api',passport.authenticate("jwt",{session:false}),appointments);

const port=process.env.PORT ;
app.listen(port);



