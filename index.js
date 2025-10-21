import chalk from 'chalk';
import axios from 'axios'
import express, { response } from 'express'
import bodyParser from 'body-parser';
import { configDotenv } from 'dotenv';

configDotenv();

console.log(process.env.PORT, 'port')
const app = express();

const port = process.env.PORT

 app.use(bodyParser.json())

 const studentArray = []
let printingArray = []
 app.listen(port, ()=>{  
    console.log(chalk.magenta(`server is serving! http://localhost${port}`))

    
})

app.get('/student-detail', async (request, response)=>{
    

    const {gender, age} = request.query;
    if(gender){
        const filteredStudents = studentArray.filter(student => 
            student.gender?.toLowerCase() === gender.toLowerCase() && student.age >= age
          );
          return response.send(filteredStudents).end()
    }
    response.send(studentArray)
})


app.post('/student', (request, response)=>{
    const thisNameExists = studentArray.filter((student)=>{
        if(student.phone===request.body.phone)return true;
    })
    if(thisNameExists.length==0){
studentArray.push(request.body);
return response.status(200).send(studentArray).end()
    }else{

        response.status(409).send({message: 'student already exists'}) 
       
    }
})

app.delete('/student', (request, response)=>{

    console.log(request.body)
 for( let i = 0 ; i < studentArray.length; i++){
    if(request.body.phone==studentArray[i].phone){
        studentArray.splice(i, 1)
    }
 }

response.send("deletion successful")

})

app.put('/student', (request, response)=>{
    console.log(request.body)
    for( let i = 0; i <studentArray.length; i++){
        if(request.body.target.phone==studentArray[i].phone){
            studentArray[i]= request.body.update
        }
    }

response.send("updated successfully")

})

const students = {
    studentsCount:21,
    names:[
        "Amaraa", "Urantogos", "Baasanbayar", "Tuvshin", "Temuulen", "Badmaa", "Bayarjavhlan", "Suhee", "Baagii", "Enhzul", "Temuujin", "Tserenpuntsag", "Bayarmaa", "Ariuka", "Galsan", "Subeedei", "Sarangoo", "Zoloo", "Bolormaa", "Husel", "Barsaa",
    ]
}

const studentDetail = {
    age:61,
    name: "Super",
    lastName: "Man",
}









// getDataByGoogle();