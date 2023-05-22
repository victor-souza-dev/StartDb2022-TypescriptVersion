import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { AuthRequest } from '../models/AuthRequest';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const CurrentUser = createParamDecorator(
  async (
    data: unknown,
    context: ExecutionContext,
  ): Promise<User | undefined> => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    if (!request.user) {
      return undefined;
    }

    const user = await prisma.user.findUnique({
      where: { id: request.user.id },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return { ...user, password: undefined } || undefined;
  },
);
