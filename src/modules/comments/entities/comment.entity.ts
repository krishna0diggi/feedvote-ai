// comment.entity.ts
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from 'src/modules/posts/post.entity';
import { User } from 'src/modules/users/entities/user.entity';

@Entity({ name: 'comments' })
export class Comment {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'text' })
    content!: string;

    // ─── Relations ────────────────────────────────────────────

    @ManyToOne(() => Post, post => post.comments, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'post_id' })
    post!: Post;

    @ManyToOne(() => User, user => user.comments, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user!: User;

    // ─── Timestamps ───────────────────────────────────────────

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;
}