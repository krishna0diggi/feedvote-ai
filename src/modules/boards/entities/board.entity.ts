import { User } from 'src/modules/users/entities/user.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { BoardMember } from './board-member.entity';

@Entity({ name: 'boards' })
export class Board {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    name!: string;

    @Column({ type: 'text' })
    description!: string;

    @Column({ type: 'varchar', length: 20 })
    visibility!: 'private' | 'public';

    @ManyToOne(() => User, (user) => user.boards, { nullable: false })
    @JoinColumn({ name: 'created_by' })
    createdBy!: User;

    @OneToMany(() => BoardMember, (boardMember) => boardMember.board)
    members!: BoardMember[];

    @Column({ name: 'created_by', type: 'int' })
    createdById!: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    @Column({ name: 'deleted_at', type: 'timestamp', nullable: true })
    deletedAt?: Date;
}
