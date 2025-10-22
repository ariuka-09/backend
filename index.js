import chalk from "chalk";
import axios from "axios";
import express, { response } from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectDB } from "./db.js";
import {
  createUser,
  deleteUserById,
  getUser,
  getUserById,
} from "./models/src/controllers/user.js";

configDotenv();

console.log(process.env.PORT, "port");
const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());

let studentArray = [];

app.listen(port, () => {
  console.log(chalk.magenta(`server is serving! http://localhost${port}`));
  connectDB();
});

// app.get('/student-detail',  (request, response)=>{
//     const {number} = request.params;
//     console.log(number, "number");

//     if(number){
//         studentArray = studentArray.filter((student)=>
//             student.phone == number)
//     }

//     const {gender, age} = request.query;
//     if(gender || age){
//         studentArray = studentArray.filter(student =>
//             student.gender?.toLowerCase() === gender.toLowerCase() && student.age >= age
//         );
//     }
//     response.send(studentArray)
//     // response.send(...studentArray)
//     //why isnt this spreading properly?
//     //answer it can only return 1 array
// })
app.get("/student-detail", getUser);
app.get('/student-detail/:id',getUserById);
app.post("/student", createUser);
app.delete('/student', deleteUserById)

// app.delete("student", deleteUser);
// app.post('/student', (request, response)=>{
//     let thisNameExists;
//     let studentIndex = [];
//     console.log(request.body.length, "the length");

//     for(let i = 0 ; i < request.body.length; i++){
//          thisNameExists = studentArray.filter((student)=>{
//             const thisNameExists = student.filter(student=>{if(student.phone==request.body[i].phone)return true})
//                 if(thisNameExists.length!==0){
//                     return true;
//                 }
//         })
//     }

//     if(thisNameExists.length == 0){
// studentArray.push( request.body );
// return response.status(200).send(studentArray).end()
//     }else{
//         response.status(409).send({message: 'student already exists'})
//     }
// })

// app.delete("/student", (request, response) => {
//   console.log(request.body);
//   for (let i = 0; i < studentArray.length; i++) {
//     if (request.body.phone == studentArray[i].phone) {
//       studentArray.splice(i, 1);
//     }
//   }
//   response.send("deletion successful");
// });

// app.put("/student", (request, response) => {
//   console.log(request.body);
//   for (let i = 0; i < studentArray.length; i++) {
//     if (request.body.target.phone == studentArray[i].phone) {
//       studentArray[i] = request.body.update;
//     }
//   }
//   response.send("updated successfully");
// });
