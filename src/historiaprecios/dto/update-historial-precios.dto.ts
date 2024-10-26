import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialPreciosDto } from './create-historial-precios.dto';

export class UpdateHistorialPreciosDto extends PartialType(CreateHistorialPreciosDto) {}
