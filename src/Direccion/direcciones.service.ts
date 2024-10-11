import { Injectable } from '@nestjs/common';
import { CreateDireccionDto } from './dto/create-direccion.dto';
import { UpdateDireccionDto } from './dto/update-direccion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Direccion } from './entities/direccion.entity';


@Injectable()
export class DireccionesService {
  constructor(
    @InjectRepository(Direccion)
    private direccionesRepository: Repository<Direccion>,
  ) {}

  create(createDireccionDto: CreateDireccionDto) {
    const newDireccion = this.direccionesRepository.create(createDireccionDto);
    return this.direccionesRepository.save(newDireccion);
  }

  findAll() {
    return this.direccionesRepository.find({ relations: ['usuario'] });
  }

  findOne(id: number) {
    return this.direccionesRepository.findOne({ where: { ID_Direccion: id }, relations: ['usuario'] });
  }

  update(id: number, updateDireccionDto: UpdateDireccionDto) {
    return this.direccionesRepository.update(id, updateDireccionDto);
  }

  remove(id: number) {
    return this.direccionesRepository.delete(id);
  }
}
