import { Column, Entity, PrimaryGeneratedColumn, Timestamp ,OneToMany } from 'typeorm';

@Entity()
export class task {
  @PrimaryGeneratedColumn()
  l_ma: number;

  @Column({ length: 500 }) 
  l_ten: string;
}