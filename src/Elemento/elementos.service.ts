import { Injectable } from '@nestjs/common';
import { CreateElementoDto } from './dto/create-elementos.dto';
import { UpdateElementoDto } from './dto/update-elementos.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Elemento } from './entities/elementos.entity';



@Injectable()
export class ElementosService {
  constructor(
    @InjectRepository(Elemento)
    private elementosRepository: Repository<Elemento>,
  ) {}
  
  create(createElementoDto: CreateElementoDto) {
    const newElemento = this.elementosRepository.create(createElementoDto);
    return this.elementosRepository.save(newElemento);
  }
  
  findAll() {
    return this.elementosRepository.find();
  }
 
  findOne(id: number) {
    return this.elementosRepository.findOne({ where: { ID_Elemento: id } });
  }
  
  update(id: number, updateElementoDto: UpdateElementoDto) {
    return this.elementosRepository.update(id, updateElementoDto);
  }
  
  remove(id: number) {
    return this.elementosRepository.delete(id);
  }
}
