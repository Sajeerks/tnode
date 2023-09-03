import express from 'express'
import userROuter from "./routes/userRoute.ts"


const app =express()


app.use("/users", userROuter)

app.get("/", (req,res)=>{
    res.send("hi this is working")
})

app.listen(4000, ()=>{
    console.log("the server is working in 400000000000")
})