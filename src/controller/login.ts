import{ Controller, Use,  GetMapping, PostMapping} from '../decorator';
import express, {NextFunction, Request, Response, } from 'express';
import 'reflect-metadata';
import {login} from '../service/account';




@Controller('/')
class LoginController {

  @PostMapping('/login')
  async login(req: Request, res: Response) {

    const { email,password } = req.body;
    console.log(email,password)
    const result = await login(email,password);
      res.json({
        status: 400,
        desc: 'Invaild email or password',
        data:result
      });
    }
    
}
