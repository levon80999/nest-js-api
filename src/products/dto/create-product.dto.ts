import { IsNumber, IsString, Length, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @Length(5, 255)
  @ApiProperty()
  title: string;

  @IsNumber()
  @ApiProperty()
  @Min(5)
  @Max(100)
  price: number;
}
