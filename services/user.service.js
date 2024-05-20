import user from '../models/user.model.js';


// TO GET only one data (name || age || email || password || createdAt)
const getSpecData = async (email, data) => {
    let userresult = await user.find({"email": email}, {[data]: 1})
    console.log(userresult)
    return userresult
}

// To get all users
const getAllusers = async ()=>{
    const users = await user.find()
    if(users)
        return users
    else
        return false
}

// get user info by email
const getUserByEmail = async (email) => {
    const userresult = await user.find({email: email})
    return userresult
}

// create new user
const addUser = async (name, email, password, age) => {
    const response =  await user({name, email, password, age})
    return response
}

// update existing user
const updateUser = async (name, email, password, age) => {
    const updater = {}
    updater.name = name ? name : await getSpecData(email, "name")
    updater.password = password ? password : await getSpecData(email, "password")
    updater.age = age ? age : await getSpecData(email, "age")
    console.log(updater)
    const response = await user.updateOne({email: email}, updater)
    return response
}

export default {
    getAllusers,
    addUser,
    getUserByEmail,
    updateUser
}
