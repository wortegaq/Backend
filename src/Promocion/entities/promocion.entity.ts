import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('promocion')
export class Promocion {
  @PrimaryGeneratedColumn()
  ID_Promocion: number;

  @Column({ type: 'varchar', length: 100 })
  Nombre: string;

  @Column({ type: 'text' })
  Descripcion: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  Descuento: number;

  @Column({ type: 'timestamp' })
  Fecha_Inicio: Date;

  @Column({ type: 'timestamp' })
  Fecha_Fin: Date;

  @Column({ type: 'int' })
  Aplicable_a: number;

  @Column({ type: 'boolean', default: false })
  Eliminado: boolean;
}
