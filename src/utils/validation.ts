import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ObjectSchema, ValidationOptions, ValidationResult } from 'joi';
import { mapErrorMessage } from '@lib/i18n';
import { getLanguage } from './common';

type RequestDataField = 'body' | 'params' | 'query' | 'headers';

export const validate = (schema: ObjectSchema, field: RequestDataField = 'body', options: ValidationOptions = {}) =>
    (async (req: Request, res: Response, next: NextFunction) => {
        const result: ValidationResult = schema.validate(req[field], options);

        if (!result.error) {
            req[field] = result.value;
            return next();
        }

        console.error('Request validation failed with error', JSON.stringify(result.error));
        return res.badRequest(null, mapErrorMessage(getLanguage(req), result.error));
    }) as RequestHandler;
