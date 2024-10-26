import { PartialType } from '@nestjs/mapped-types';
import { CreateElementoDto } from './create-elementos.dto';

export class UpdateElementoDto extends PartialType(CreateElementoDto) {}
