import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransformerDto } from './dto/create-transformer.dto';
import { UpdateTransformerDto } from './dto/update-transformer.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransformersService {
  constructor(private prisma: PrismaService) {}
  async create(createTransformerDto: CreateTransformerDto) {
    const transformer = await this.prisma.transformer.create({
      data: createTransformerDto,
    });
    return transformer;
  }

  async findAll(page: number, limit: number) {
    const [data, total] = await this.prisma.$transaction([
      this.prisma.transformer.findMany({
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.transformer.count(),
    ]);

    return { data, meta: { page, limit, total } };
  }

  async findOne(id: number) {
    const transformer = await this.prisma.transformer.findUnique({
      where: { id },
    });
    if (!transformer) {
      throw new NotFoundException();
    }
    return transformer;
  }

  update(id: number, updateTransformerDto: UpdateTransformerDto) {
    return this.prisma.transformer.update({
      where: { id },
      data: updateTransformerDto,
    });
  }

  // Hard delete: Drawing e DrawingVersion são removidos em cascata (onDelete: Cascade).
  async remove(id: number) {
    await this.prisma.transformer.delete({ where: { id } });
  }
}
