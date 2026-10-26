import { PartialType } from '@nestjs/mapped-types';
import { CreateTransformerDto } from './create-transformer.dto';

export class UpdateTransformerDto extends PartialType(CreateTransformerDto) {}
