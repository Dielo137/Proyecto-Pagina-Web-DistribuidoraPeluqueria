
import { 
    IsString, 
    IsNotEmpty, 
    IsNumber, 
    Min, 
    IsOptional, 
    IsUrl 
} from 'class-validator';


export class UpdateProductDto {

    @IsString()
    @IsNotEmpty()
    @IsOptional() 
    readonly sku?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional() 
    readonly nombre?: string;

    @IsString()
    @IsOptional() 
    readonly descripcion?: string;

    @IsNumber()
    @Min(0)
    @IsOptional() 
    readonly precio?: number;

    @IsNumber()
    @Min(0)
    @IsOptional() 
    readonly stock?: number;

    @IsUrl()
    @IsOptional() 
    readonly imagenURL?: string;

    @IsString()
    @IsOptional() 
    readonly categoriaId?: string;
}