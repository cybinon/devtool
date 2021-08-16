import { Request } from 'express';
import { MyError } from './errorHandler';
import * as Joi from 'joi';

export default async (schema: Joi.ObjectSchema, req: Request): Promise<void> => {
    const data = Object.assign(req.body, req.query);
    const value:string = await schema.validateAsync(data);
    
    if (Joi.isError(value)) {
        throw new MyError(value, 400);
    }
};
