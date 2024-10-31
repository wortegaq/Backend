import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class LoginDto {

  @IsNotEmpty()
  @IsString()
  Correo_Electronico: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
