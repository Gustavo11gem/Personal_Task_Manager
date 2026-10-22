// validated.ts - CHECKS THAT :id IN THE URL IS A VALID MONGODB ID

import { NextFunction, Request, Response } from "express";
import { isValidObjectId } from "mongoose";

// runs BEFORE the controller on routes
// - valid id -> call next() so the controller will run
// - invalid id -> stop here and send a 400 (bad request)

export const validatedId = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400).json({ message: `invalid task ID: ${id}` });
  }

  next();
};
