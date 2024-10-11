import { IsString, IsEmail, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  Nombre: string;

  @IsEmail()
  @IsNotEmpty()
  Correo_Electronico: string;

  @IsString()
  @IsNotEmpty()
  Contraseña: string;

  @IsEnum(['Activo', 'Inactivo'])
  @IsOptional()
  Estado?: 'Activo' | 'Inactivo';
}
