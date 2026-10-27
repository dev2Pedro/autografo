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
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('transformers')
@Controller('transformers')
export class TransformersController {
  constructor(private readonly transformersService: TransformersService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Transformador criado' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  create(@Body() createTransformerDto: CreateTransformerDto) {
    return this.transformersService.create(createTransformerDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista paginada: { data, meta }' })
  @ApiResponse({ status: 400, description: 'page ou limit inválidos' })
  findAll(@Query() query: PaginationQueryDto) {
    return this.transformersService.findAll(query.page, query.limit);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Transformador encontrado' })
  @ApiResponse({ status: 400, description: 'id inválido' })
  @ApiResponse({ status: 404, description: 'Transformador não encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.transformersService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Transformador atualizado' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiResponse({ status: 404, description: 'Transformador não encontrado' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTransformerDto: UpdateTransformerDto,
  ) {
    return this.transformersService.update(id, updateTransformerDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: 204, description: 'Transformador removido' })
  @ApiResponse({ status: 404, description: 'Transformador não encontrado' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.transformersService.remove(id);
  }
}
