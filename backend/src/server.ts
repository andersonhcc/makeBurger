import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import { router } from './routes';

const app = express();
app.use(express.json()); //utilizar json no node
app.use(cors()); // qualquer ip pode acessar

app.use(router);



//basicamente é uma tratativa de erros, ou seja, quando vim um erro de routas, a gente retorna um json informando esse erro, caso venha erros do tipo throw a gente faz o tratamento e retorna um json de "internel server error";
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error){ // caso for uma instância do tipo error
    return res.status(400).json({
      error: err.message,
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})
app.listen(3333, () => console.log("Server on")); // porta q utilizaremos no localhost;