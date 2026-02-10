export class HttpResponse {
  static OK(data: any, message: string = 'Success') {
    return {
      statusCode: 200,
      message,
      data,
    };
  }

  static CREATED(data: any, message: string = 'Created successfully') {
    return {
      statusCode: 201,
      message,
      data,
    };
  }

  static BAD_REQUEST(message: string = 'Bad request', errors?: any) {
    return {
      statusCode: 400,
      message,
      errors,
    };
  }

  static UNAUTHORIZED(message: string = 'Unauthorized') {
    return {
      statusCode: 401,
      message,
    };
  }

  static FORBIDDEN(message: string = 'Forbidden') {
    return {
      statusCode: 403,
      message,
    };
  }

  static NOT_FOUND(message: string = 'Not found') {
    return {
      statusCode: 404,
      message,
    };
  }

  static INTERNAL_SERVER_ERROR(message: string = 'Internal server error') {
    return {
      statusCode: 500,
      message,
    };
  }

  static send(res: any, statusCode: number, data: any, message?: string) {
    return res.status(statusCode).json({
      statusCode,
      message,
      data,
      timestamp: new Date().toISOString(),
    });
  }
}

// types update
