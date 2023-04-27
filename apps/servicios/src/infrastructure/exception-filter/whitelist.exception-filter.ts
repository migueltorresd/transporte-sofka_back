import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

export const whitelistPipe: ValidationPipe = new ValidationPipe({
  whitelist: true,
  forbidNonWhitelisted: true,
  forbidUnknownValues: true,
  skipUndefinedProperties: true,
  exceptionFactory: (errors: ValidationError[]) => {
    const newErrors = errors.filter((error) =>
      Object.keys(error.constraints).includes('whitelistValidation'),
    );
    if (newErrors.length > 0) {
      const messages = newErrors.map(
        (error) => `${error.property} no deberia existir`,
      );
      return new BadRequestException(messages);
    }
    return new BadRequestException(errors);
  },
});
