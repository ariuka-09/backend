import { User } from "../models/user.js";

export const createUser = (request, response) => {
  try {
    if(Array.isArray(request.body)){ request.body = [request.body]}
    //has problem
    const result = [];
    for(let i = 0 ; i < request.body.length; i++){
        result.push(User.create({
            username: request.body[i].username,
            email: request.body[i].name,
            password: request.body[i].phone,
            age: request.body[i].age,
          }))
    }   
    response.send(result), console.log("req body", request.body.length);
  } catch (error) {
    console.error("error", error);
  }
};
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
