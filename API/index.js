const express = require("express");
const dotenv = require("dotenv");
const dbconnect = require('./Connection/Config'); // Correct import for dbconnect
const User = require("./Models/User");
const userRoute = require("./Routes/UserRoute");

dotenv.config();
const app = express();

app.use(express.json());
app.use('/user',userRoute);

dbconnect().then(() => {
  const PORT = process.env.PORT || 3000; // Ensure PORT is defined

  app.listen(PORT, () => {
    console.log(`PORT : ${process.env.PORT}`);
  });
}).catch(err => {
  console.error("Failed to connect to the database:", err);
});
