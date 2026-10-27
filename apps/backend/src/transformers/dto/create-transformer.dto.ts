import { TransformerPhase } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateTransformerDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  name: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  powerKva: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  primaryVoltage: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  secondaryVoltage: number;

  @IsEnum(TransformerPhase)
  phases: TransformerPhase;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  heightMm?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  widthMm?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  depthMm?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  bushingCount?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  radiatorCount?: number;

  @IsOptional()
  @IsBoolean()
  hasTank?: boolean;

  @IsOptional()
  @IsBoolean()
  hasConservator?: boolean;
}
