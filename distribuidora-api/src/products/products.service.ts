import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './entities/product.entity'; 

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private readonly productModel: Model<ProductDocument>) {}


  async create(createProductDto: CreateProductDto): Promise<Product> {
    
    const createdProduct = new this.productModel(createProductDto);
   
    return createdProduct.save();
  }

  
  async findAll(): Promise<Product[]> {
    
    return this.productModel.find().exec();
  }

  // MÉTODO PARA ENCONTRAR UN PRODUCTO POR ID
  async findOne(id: string): Promise<Product> { 
    const product = await this.productModel.findById(id).exec();
    if (!product) { 
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    return product;
  }

  // MÉTODO PARA ACTUALIZAR UN PRODUCTO
  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> { 
    const existingProduct = await this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true }).exec(); 
    if (!existingProduct) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    return existingProduct;
  }

  // MÉTODO PARA ELIMINAR UN PRODUCTO
  async remove(id: string): Promise<any> { 
    const result = await this.productModel.findByIdAndDelete(id).exec(); 
    if (!result) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    return { message: `Product with ID "${id}" successfully removed.` }; 
  }
}