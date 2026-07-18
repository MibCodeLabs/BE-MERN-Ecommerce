import type { NextFunction, Request, Response } from "express";
import { logger } from "../util/logger.js";
import { AppError } from "../error/app-error.js";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.error(err.message, {
    path: req.url,
    method: req.method,
    stack: err.stack,
  });

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  res.status(500).json({ message: "Something went wrong" });
};
