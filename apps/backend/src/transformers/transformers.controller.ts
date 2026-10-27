import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { TransformersService } from './transformers.service';
import { CreateTransformerDto } from './dto/create-transformer.dto';
import { UpdateTransformerDto } from './dto/update-transformer.dto';
import { PaginationQueryDto } from './dto/pagination.query.dto';

@Controller('transformers')
export class TransformersController {
  constructor(private readonly transformersService: TransformersService) {}

  @Post()
  create(@Body() createTransformerDto: CreateTransformerDto) {
    return this.transformersService.create(createTransformerDto);
  }

  @Get()
  findAll(@Query() query: PaginationQueryDto) {
    return this.transformersService.findAll(query.page, query.limit);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.transformersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTransformerDto: UpdateTransformerDto,
  ) {
    return this.transformersService.update(id, updateTransformerDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.transformersService.remove(id);
  }
}
