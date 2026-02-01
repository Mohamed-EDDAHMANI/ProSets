import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  sku: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsString()
  categoryId: string;
}
