import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Produto {
        
    @PrimaryColumn()
    id: number

    @Column()
    nome: String

    @Column()
    preco: number

    @Column()
    imagem: string

    @Column()
    descricao: string
       
}

