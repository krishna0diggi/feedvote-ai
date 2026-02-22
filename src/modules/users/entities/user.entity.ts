// user.entity.ts
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Role } from './role.entity';
import { Board } from 'src/modules/boards/entities/board.entity';
import { BoardMember } from 'src/modules/boards/entities/board-member.entity';
import { Post } from 'src/modules/posts/post.entity';
import { Comment } from 'src/modules/comments/entities/comment.entity';
import { Vote } from 'src/modules/votes/entities/vote.entity';
@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100, unique: true })
    email!: string;

    @Column({ type: 'varchar', length: 100 })
    name!: string;

    @Column({ type: 'varchar', length: 6, nullable: true, default: null })
    otp?: string;

    @Column({ type: 'timestamptz', nullable: true })
    otpExpiresAt?: Date;

    @Column({ type: 'boolean', default: true })
    isActive!: boolean;

    // ─── Relations ────────────────────────────────────────────

    @ManyToOne(() => Role, role => role.users)
    @JoinColumn({ name: 'role_id' })
    role!: Role;

    @OneToMany(() => Board, board => board.createdBy)
    boards!: Board[];

    @OneToMany(() => BoardMember, bm => bm.user)
    members!: BoardMember[];

    @OneToMany(() => Post, post => post.user)
    posts!: Post[];

    @OneToMany(() => Comment, comment => comment.user)
    comments!: Comment[];

    @OneToMany(() => Vote, vote => vote.user)
    votes!: Vote[];

    // ─── Timestamps ───────────────────────────────────────────

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}