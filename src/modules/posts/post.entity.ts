// post.entity.ts
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
import { Board } from '../boards/entities/board.entity';
import { Category } from '../boards/entities/categories.entity';
import { Status } from '../boards/entities/status.entity';
import { User } from '../users/entities/user.entity';
// import { Comment } from 'src/modules/comments/entities/comment.entity';
import { Vote } from '../votes/entities/vote.entity';
import { Comment } from  '../comments/entities/comment.entity'

export enum PostPriority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}

@Entity({ name: 'posts' })
export class Post {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    title!: string;

    @Column({ type: 'text' })
    description!: string;

    @Column({ type: 'enum', enum: PostPriority, default: PostPriority.MEDIUM })
    priority!: PostPriority;

    @Column({ type: 'int', default: 0 })
    vote_count!: number;

    // ─── Relations ────────────────────────────────────────────

    @ManyToOne(() => Board, board => board.posts, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'board_id' })
    board!: Board;

    @ManyToOne(() => User, user => user.posts, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @ManyToOne(() => Category, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'category_id' })
    category?: Category;

    @ManyToOne(() => Status, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'status_id' })
    status?: Status;

    @OneToMany(() => Comment, comment => comment.post)
    comments!: Comment[];

    @OneToMany(() => Vote, vote => vote.post)
    votes!: Vote[];

    // ─── Timestamps ───────────────────────────────────────────

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    @Column({ name: 'last_activity_at', type: 'timestamp', nullable: true })
    lastActivityAt?: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;
}