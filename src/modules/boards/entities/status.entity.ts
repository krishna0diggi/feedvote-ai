import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Board } from "./board.entity";
@Entity({ name: 'status' })
export class Status {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => Board, { nullable: false })
    @JoinColumn({ name: 'board_id', })
    board!: Board

    @Column({ type: 'varchar' })
    name: string

    @Column({ type: 'integer' })
    order!: number

    @CreateDateColumn()
    createdAt!: Date;

}