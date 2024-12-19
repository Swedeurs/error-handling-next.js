import { ZodError } from "zod";
import { ForbiddenError, NotFoundError, UnauthorizedError } from "./errors";

export type CustomError =
  | Error
  | UnauthorizedError
  | ForbiddenError
  | NotFoundError
  | ZodError;