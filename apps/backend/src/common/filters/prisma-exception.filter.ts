import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

const STATUS_BY_CODE: Record<string, { status: HttpStatus; message: string }> =
  {
    P2002: { status: HttpStatus.CONFLICT, message: 'Registro já existe' },
    P2025: { status: HttpStatus.NOT_FOUND, message: 'Registro não encontrado' },
  };

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const mapped = STATUS_BY_CODE[exception.code] ?? {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    };
    response.status(mapped.status).json({
      statusCode: mapped.status,
      message: mapped.message,
    });
  }
}
