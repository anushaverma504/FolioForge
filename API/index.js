const express = require("express");
const dotenv = require("dotenv");
const dbconnect = require('./Connection/Config');
const userRoute = require("./Routes/UserRoute");
const basicInfoRoute = require("./Routes/BasicInfoRoute");
const certificationRoute = require("./Routes/CertificationRoute");
const educationRoute = require("./Routes/EducationRoute");
const experienceRoute = require("./Routes/ExperienceRoute");
const projectRoute = require("./Routes/ProjectRoute");
const skillRoute = require("./Routes/SkillRoute");
const cors = require("cors");

dotenv.config();
const app = express();

var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use('/user',userRoute);
app.use('/basicInfo',basicInfoRoute);
app.use('/certification',certificationRoute);
app.use('/education',educationRoute);
app.use('/experience',experienceRoute);
app.use('/project',projectRoute);
app.use('/skill',skillRoute);

app.use(express.static('API'));
app.use('/Uploads', express.static('Uploads'));

dbconnect().then(() => {
  const PORT = process.env.PORT || 3000; 

  app.listen(PORT, () => {
    console.log(`PORT : ${process.env.PORT}`);
  });
}).catch(err => {
  console.error("Failed to connect to the database:", err);
});
