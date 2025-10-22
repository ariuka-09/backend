import { User } from "../models/user.js";

export const createUser = (request, response)=>{
    try {
       const result =  User.create(
            {
                username:request.body[0].username,
                email:request.body[0].name,
                password:request.body[0].phone,
                age:request.body[0].age
            }
        ) 
        response.send(result),
        console.log("req body", request.body)
    } catch (error) {
 
        console.error("error", error);
        
    }
}
export const getUser = async (request, response)=>{
    try {
       const result =  await User.find() 
        response.send(result),
        console.log("req body", request.body)
    } catch (error) {
 
        console.error("error", error);
        
    }
}
export const getUserById = (request, response)=>{
    try {
       const result =  User.findById(id) 
        response.send(result),
        console.log("req body", request.body)
    } catch (error) {
 
        console.error("error", error);
        
    }
}