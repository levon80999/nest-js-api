import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
import { ProductsModule } from "./products.module";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductsService {
  private products = [];

  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async create(productDto: CreateProductDto): Promise<Product> {
    const product = new this.productModel(productDto);

    return product.save();
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }

  async update(id: string, productDto: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true });
  }
}
