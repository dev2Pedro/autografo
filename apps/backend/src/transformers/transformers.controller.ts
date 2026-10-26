import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransformersService } from './transformers.service';
import { CreateTransformerDto } from './dto/create-transformer.dto';
import { UpdateTransformerDto } from './dto/update-transformer.dto';

@Controller('transformers')
export class TransformersController {
  constructor(private readonly transformersService: TransformersService) {}

  @Post()
  create(@Body() createTransformerDto: CreateTransformerDto) {
    return this.transformersService.create(createTransformerDto);
  }

  @Get()
  findAll() {
    return this.transformersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transformersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransformerDto: UpdateTransformerDto) {
    return this.transformersService.update(+id, updateTransformerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transformersService.remove(+id);
  }
}
