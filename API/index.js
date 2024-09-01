const express = require("express");
const dotenv = require("dotenv");
const dbconnect = require('./Connection/Config'); 
const User = require("./Models/User");
const userRoute = require("./Routes/UserRoute");
const basicInfoRoute = require("./Routes/BasicInfoRoute");
const certificationRoute = require("./Routes/CertificationRoute");
const educationRoute = require("./Routes/EducationRoute");
const experienceRoute = require("./Routes/ExperienceRoute");
const projectRoute = require("./Routes/ProjectRoute");
const skillRoute = require("./Routes/SkillRoute");

dotenv.config();
const app = express();

app.use(express.json());
app.use('/user',userRoute);
app.use('/basicInfo',basicInfoRoute);
app.use('/certification',certificationRoute);
app.use('/education',educationRoute);
app.use('/experience',experienceRoute);
app.use('/project',projectRoute);
app.use('/skill',skillRoute);

dbconnect().then(() => {
  const PORT = process.env.PORT || 3000; 

  app.listen(PORT, () => {
    console.log(`PORT : ${process.env.PORT}`);
  });
}).catch(err => {
  console.error("Failed to connect to the database:", err);
});
