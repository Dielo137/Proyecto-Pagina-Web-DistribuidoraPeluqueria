import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true }) 
export class Product {
  @Prop({ required: true, unique: true })
  sku: string;

  @Prop({ required: true })
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop({ required: true, type: Number, min: 0 })
  precio: number;

  @Prop()
  imagenURL: string;

  @Prop({ required: true, type: Number, min: 0, default: 0 })
  stock: number;

  @Prop() 
  categoriaId: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product); 