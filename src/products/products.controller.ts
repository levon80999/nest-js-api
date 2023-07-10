import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  Header,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get Products' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Single Product' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getOne(@Param('id') id): Promise<Product> {
    return this.productService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-control', 'none')
  @ApiOperation({ summary: 'Create Product' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove Product' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  remove(@Param('id') id: string): Promise<Product> {
    return this.productService.remove(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Product' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }
}
