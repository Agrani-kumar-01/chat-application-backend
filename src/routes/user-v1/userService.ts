import { Request, Response } from "express";
import moment from 'moment-timezone';
import { getPlatform } from '../../utils/common';

class userService {
    async createUser(req:Request, res:Response){
        const {name, email, password} = req.body;
    }
}
