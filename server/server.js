import express from "express";

const app = express();

app.use(express.static("../client/dist"));


//Trenger noe middleware for å fikse at det går an å refreshe en side

app.listen(process.env.PORT || 3000);