import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstadoOrdenDto } from './dto/create-estado-orden.dto';
import { UpdateEstadoOrdenDto } from './dto/update-estado-orden.dto';
import { EstadoOrden } from './entities/estado-orden.entity';

@Injectable()
export class EstadoOrdenService {
  constructor(
    @InjectRepository(EstadoOrden)
    private estadoOrdenRepository: Repository<EstadoOrden>,
  ) {}

  create(createEstadoOrdenDto: CreateEstadoOrdenDto) {
    const estadoOrden = this.estadoOrdenRepository.create(createEstadoOrdenDto);
    return this.estadoOrdenRepository.save(estadoOrden);
  }

  findAll() {
    return this.estadoOrdenRepository.find();
  }

  findOne(id: number) {
    return this.estadoOrdenRepository.findOneBy({ ID_Estado_Orden: id });
  }

  update(id: number, updateEstadoOrdenDto: UpdateEstadoOrdenDto) {
    return this.estadoOrdenRepository.update(id, updateEstadoOrdenDto);
  }

  remove(id: number) {
    return this.estadoOrdenRepository.delete(id);
  }
}
