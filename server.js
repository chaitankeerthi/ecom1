require('dotenv').config()
 const express = require('express')
 const mongoose = require('mongoose')
 const cors = require('cors')
 const fileUpload = require('express-fileupload')
 const cookieParser = require('cookie-parser')
 const path = require('path')
//  import paymentRoute from "./routes/paymentRouter"

 const app = express()
 app.use(express.json())
 app.use(express.urlencoded({extended:true}));
 app.use(cookieParser())
 app.use(cors())
 app.use(fileUpload({
    useTempFiles:true 
 }))

 
  
// This razorpayInstance will be used to 
// access any resource from razorpay 


 //Routes
 app.use('/user',require('./routes/userRouter'))
 app.use('/api',require('./routes/categoryRouter'))
 app.use('/api',require('./routes/upload'))
 app.use('/api',require('./routes/productRouter'))
 app.use('/api',require('./routes/paymentRouter'))

 //connect to mongodb
const URI = process.env.MONGODB_URL
mongoose
  .connect(URI, {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
 


//  app.get('/',(req,res)=>{
//     res.json({msg:"Welcome to my channal ,please subscribe"})
//  })

 const PORT = process.env.PORT || 5000 
 app.listen(PORT,()=>{
    console.log('Server is running out on port',PORT)
 })