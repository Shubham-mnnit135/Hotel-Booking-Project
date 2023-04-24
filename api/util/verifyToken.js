import jwt from "jsonwebtoken";
import { createError } from "../util/error.js";

export const verifyToken = (req, res, next) => {
    console.log("i am in verifyToken middleware");
   const token = req.cookies.access_token;
   console.log("token is taken in token");
   if(!token){
       console.log("token is not here");
       return next( createError(401, "You are not authenticated!"));
   }
   console.log("token is here");
   jwt.verify(token, process.env.JWT, (err,user) => {
       if(err){
        console.log("token is invalid");
        return next(createError(403,"token is invalid!"));
       }
       console.log("token is valid");
       req.user=user;
       next();
   });

};

export const verifyUser = (req, res, next) => {
    console.log("i am in verifyUser middleware");
    verifyToken(req, res, (err) => {
        if(err)
            return next(err);
        console.log("i m in verifyuser bcz token is verify");
        if(req.user.id === req.params.id || req.user.isAdmin){
            console.log("it is either user or admin");
            next();
        }
        else{
            console.log("it not user and admin");
           return next(createError(403,"Your are not authorized"));
        }
    })
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, (err) => {
        if(err)
            return next(err);
        // console.log("i m in verifyadmin bcz token is verify");
        if(req.user.isAdmin){
            // console.log("its admin");
            next();
        }
        else{
            // console.log("its not admin");
           return next(createError(403,"Your are not authorized"));
        }
    })
};

