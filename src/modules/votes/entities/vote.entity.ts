import { Post } from "src/modules/posts/post.entity";
import { User } from "src/modules/users/entities/user.entity";
import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'votes' })
export class Vote {
    // This entity can be used to track individual votes if needed in the future.
    // For now, we are using a materialized vote count in the Post entity for performance.

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Post, { nullable: false, onDelete: 'CASCADE' })
    post!: Post;    

    @ManyToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
    user!: User;

    @CreateDateColumn()
    createdAt!: Date;
    
}