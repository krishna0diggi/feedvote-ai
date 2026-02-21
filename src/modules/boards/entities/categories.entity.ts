import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from './board.entity';

@Entity({ name: 'category' })
export class Category {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Board, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'board_id' })
    board!: Board;

    @Column({ type: 'varchar', length: 50 })
    name!: string

    @CreateDateColumn()
    createdAt!: Date;

}