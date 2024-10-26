import { Module } from '@nestjs/common';
import { ElementosService } from './elementos.service';
import { ElementosController } from './elementos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Elemento } from './entities/elementos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Elemento])],
  controllers: [ElementosController],
  providers: [ElementosService],
  exports: [TypeOrmModule],
})
export class ElementosModule {}

