import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { HistorialPreciosService } from './historial-precios.service';
import { CreateHistorialPreciosDto } from './dto/create-historial-precios.dto';
import { UpdateHistorialPreciosDto } from './dto/update-historial-precios.dto';
import { HistorialPrecios } from './entities/historial-precios.entity';

@Controller('historial-precios')
export class HistorialPreciosController {
  constructor(private readonly historialPreciosService: HistorialPreciosService) {}

  @Post()
  async create(@Body() createHistorialPreciosDto: CreateHistorialPreciosDto): Promise<HistorialPrecios> {
    return await this.historialPreciosService.create(createHistorialPreciosDto);
  }

  @Get()
  async findAll(): Promise<HistorialPrecios[]> {
    return await this.historialPreciosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<HistorialPrecios> {
    return await this.historialPreciosService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHistorialPreciosDto: UpdateHistorialPreciosDto,
  ): Promise<HistorialPrecios> {
    return await this.historialPreciosService.update(id, updateHistorialPreciosDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.historialPreciosService.remove(id);
  }
}
