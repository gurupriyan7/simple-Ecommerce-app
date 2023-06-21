import { NextFunction, Request, Response } from 'express'

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = res.statusCode ? res.statusCode : 500

  res.status(statusCode).json({ message: error.message })
}
