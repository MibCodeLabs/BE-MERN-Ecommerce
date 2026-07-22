import { Router } from "express";

const authRouter = Router();
authRouter.post("/customer/register",(req,res)=>{res.send()});
authRouter.post("/customer/login",(req,res)=>{res.send()});
authRouter.post("/shop/register",(req,res)=>{res.send()});
authRouter.post("/shop/login",(req,res)=>{res.send()});
authRouter.post("/staff/login",(req,res)=>{res.send()});
authRouter.post("/refresh",(req,res)=>{res.send()});
authRouter.post("/logout",(req,res)=>{res.send()});
// router.get("/me",(req,res)=>{res.send()});
export default authRouter;
