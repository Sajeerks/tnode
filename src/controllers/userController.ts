import { NextFunction ,Response, Request} from "express";
import userRouter from "../routes/userRoute.ts";
import { UserType } from "../models/userModels.ts";



export const getUsers =(req:Request , res:Response, next:NextFunction)=>{

const users:UserType = {users:["AdA", "dsfg", "safsaf", "afsaf"]}


    res.json({
        users,
    })
}