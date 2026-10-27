import { PartialType } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { TransformerPhase } from '@prisma/client';
import { CreateTransformerDto } from './create-transformer.dto';

const nullToInvalid = () =>
  Transform(({ value }: { value: unknown }) =>
    value === null ? Number.NaN : value,
  );

export class UpdateTransformerDto extends PartialType(CreateTransformerDto) {
  @nullToInvalid()
  name?: string;

  @nullToInvalid()
  powerKva?: number;

  @nullToInvalid()
  primaryVoltage?: number;

  @nullToInvalid()
  secondaryVoltage?: number;

  @nullToInvalid()
  phases?: TransformerPhase;
}
