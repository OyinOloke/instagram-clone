import express from "express"
import sequelize from "./sequelize";

const app= express()


sequelize
.authenticate()
.then(()=> {console.log("Connection established successfully");})
.catch(err=>{
    console.log("Unable to connect to database",err)
    process.exit(0);

})
sequelize.sync();
 
app.listen(3000, ()=>{console.log("App is listening on port 3000");})
