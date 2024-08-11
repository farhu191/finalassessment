const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect(
    'mongodb+srv://farhana:farhana14@cluster0.d9xk7.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0'
    )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });