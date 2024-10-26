import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HistorialPrecios } from '../../historiaprecios/entities/historial-precios.entity';

@Entity('elemento')
export class Elemento {
  @PrimaryGeneratedColumn()
  ID_Elemento: number;

  @Column({ type: 'varchar', length: 100 })
  Nombre: string;

  @Column({ type: 'text', nullable: true })
  Descripcion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  Precio: number;

  @Column()
  ID_Categoria: number;

  @Column({ type: 'enum', enum: ['Disponible', 'No disponible', 'En Espera'], default: 'Disponible' })
  Disponibilidad: 'Disponible' | 'No disponible' | 'En Espera';

  @Column({ type: 'boolean', default: false })
  Eliminado: boolean;


  @OneToMany(() => HistorialPrecios, historialPrecios => historialPrecios.ID_Elemento)
  historialPrecios: HistorialPrecios[];
  
  



  
}