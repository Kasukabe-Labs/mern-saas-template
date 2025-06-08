class ErrorResponse extends Error {
  statusCode: number;
  code?: number;

  constructor(message: string, statusCode: number, code?: number) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;

    // Maintains proper stack trace for where our error was thrown (only available in V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ErrorResponse;
