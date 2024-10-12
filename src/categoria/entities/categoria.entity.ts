import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categoria')
export class Categoria {
  @PrimaryGeneratedColumn()
  ID_Categoria: number;

  @Column({ type: 'varchar', length: 100 })
  Nombre: string;

  @Column({ type: 'text' })
  Descripcion: string;
}
