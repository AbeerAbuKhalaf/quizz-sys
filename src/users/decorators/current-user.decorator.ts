import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const currentUser = request.user;
    return currentUser; // Assuming user info is added to the request object
  },
);
