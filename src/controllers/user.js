import { response } from "express";
import { User } from "../models/user.js";

export const createUsers = async (request, response) => {
  console.log(request.body);
  
  try {
const length = await request.body.length
    for(let i = 0 ; i < length; i++){
        await User.create({
            username: request.body[i].username,
            name: request.body[i].name,
            phone: request.body[i].phone,
            age: request.body[i].age,
        })
    }   
    response.send("result"), console.log("req body", request.body.length);
  } catch (error) {
    console.error("error", error);
    response.status(400).send("wrong data")
  }
};
export const createUser = async (request, response)=>{
  try {
   await User.create(
      {
        username:request.body.username,
        name:request.body.name,
        phone:request.body.phone,
        age:request.body.age,
      }

    )
    response.status(200).send("a student has been added successfully")
  } catch (error) {
    
  }
}
export const getUser = async (request, response) => {
  try {
    const result = await User.find();
    response.send(result), console.log("req body", request.body);
  } catch (error) {
    console.error("error", error);
  }
};
export const getUserById = async (request, response) => {
    const {id} = request.params;
  try {
    const result = await User.findById(id);
    response.send(result), console.log("req body", request.body);
  } catch (error) {
    console.error("error", error);
  }
};
export const deleteUserById = async (request, response) => {
    const {_id} = request.body;
  try {
    const result = await User.findByIdAndDelete(_id);
    response.send(result), console.log("req body", request.body);
  } catch (error) {
    console.error("error", error);
  }
};
export const updateUserById = async (request, response) => {
    const {target, update} = request.body;
    const {_id} = target

  try {
    const result = await User.findByIdAndUpdate(_id, update);
    response.send(result), console.log("req body", request.body);
  } catch (error) {
    console.error("error", error);
  }
};
