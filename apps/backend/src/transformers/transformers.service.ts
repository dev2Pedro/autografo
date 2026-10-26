import { Injectable } from '@nestjs/common';
import { CreateTransformerDto } from './dto/create-transformer.dto';
import { UpdateTransformerDto } from './dto/update-transformer.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransformersService {
  constructor(private prisma: PrismaService) {}
  create(createTransformerDto: CreateTransformerDto) {
    return 'This action adds a new transformer';
  }

  findAll() {
    return `This action returns all transformers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transformer`;
  }

  update(id: number, updateTransformerDto: UpdateTransformerDto) {
    return `This action updates a #${id} transformer`;
  }

  remove(id: number) {
    return `This action removes a #${id} transformer`;
  }
}
