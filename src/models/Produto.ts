import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: String;

  @Column()
  preco: number;

  @Column()
  imagem: string;

  @Column()
  descricao: string;
}
