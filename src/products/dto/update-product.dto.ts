import { IsNumber, IsString, Length, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {

  @IsString()
  @ApiProperty()
  @Length(5, 255)
  title: string;

  @IsNumber()
  @ApiProperty()
  @Min(5)
  @Max(100)
  price: number;
}
