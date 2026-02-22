// board.entity.ts
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { BoardMember } from './board-member.entity';
import { Post } from 'src/modules/posts/post.entity';

export enum BoardVisibility {
    PRIVATE = 'private',
    PUBLIC = 'public',
}

@Entity({ name: 'boards' })
export class Board {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    name!: string;

    @Column({ type: 'text' })
    description!: string;

    @Column({ type: 'enum', enum: BoardVisibility, default: BoardVisibility.PUBLIC })
    visibility!: BoardVisibility;

    // ─── Relations ────────────────────────────────────────────

    @ManyToOne(() => User, user => user.boards, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'created_by' })
    createdBy!: User;

    @OneToMany(() => BoardMember, boardMember => boardMember.board)
    members!: BoardMember[];

    @OneToMany(() => Post, post => post.board)
    posts!: Post[];

    // ─── Timestamps ───────────────────────────────────────────

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;
}