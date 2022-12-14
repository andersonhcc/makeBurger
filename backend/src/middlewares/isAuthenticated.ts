import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface PayLoad {
  sub: string;
}

export function isAuthenticated(
  req:Request,
  res:Response,
  next: NextFunction,
){

  //give the token
  const authToken = req.headers.authorization;

  if(!authToken){
    return res.status(401).end();
  }

  const [, token] = authToken.split(' ');

  try {
    //validate the token
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
      ) as PayLoad; //estou falando q ele vai devolver o tipo payload

      req.user_id = sub; //recuperar o id do token e colocar dentro de uma variavel user_id  dentro do request

      return next();


  }catch(err){
    return res.status(401).end();
  }

}