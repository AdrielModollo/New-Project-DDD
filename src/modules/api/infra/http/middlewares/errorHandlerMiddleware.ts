import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../../../../../shared/exceptions/HttpException';
import { ErrorResponse } from '../../../dtos/ErrorMiddlewareDTO';

export default function httpExceptionMiddleware(
    error: HttpException,
    _request: Request,
    response: Response<ErrorResponse>,
    _next: NextFunction
): Response<any, Record<string, any>> {
    const status = error.status || 500;
    let message = error.message || 'Something went wrong';

    return response.status(status).json({
        status,
        message,
    });
}
