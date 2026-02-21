import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
    Column,
} from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { Board } from './board.entity';

@Entity({ name: 'board_members' })
export class BoardMember {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @ManyToOne(() => Board, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'board_id' })
    board!: Board;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;
}
