import { ForbiddenError, NotFoundError, UnauthorizedError } from "./errors";
import { ZodError } from "zod";
import { writeToLogFile } from "./write-to-log-file";
import { CustomError } from "./types";

export const errorHandler = (error: CustomError) => {
  let errorText =
    `Title: Internal server error\n` +
    `Status code: 500\n` +
    `Message: Something went wrong`;
  if (
    error instanceof UnauthorizedError ||
    error instanceof ForbiddenError ||
    error instanceof NotFoundError
  ) {
    errorText =
      `Title: ${error.title}\n` +
      `Status code: ${error.statusCode}\n` +
      `Message: ${error.message}`;
  } else if (error instanceof ZodError) {
    const jsonArray = JSON.parse(error.message);
    const message = jsonArray[0].message;
    errorText =
      `Title: Validation error\n` +
      `Status code: 400\n` +
      `Message: ${message}`;
  } else if (error instanceof Error) {
    errorText =
      `Title: App error\n` + 
      `Status code: 500\n` + 
      `Message: ${error.message}`;
  }
  writeToLogFile(error, errorText);
  //throw new Error(errorText);
};
