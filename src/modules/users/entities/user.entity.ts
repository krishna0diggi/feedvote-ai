import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Role } from './role.entity';
import { Board } from 'src/modules/boards/entities/board.entity';
import { BoardMember } from 'src/modules/boards/entities/board-member.entity';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100, unique: true })
    email!: string;

    @Column({ type: 'varchar', length: 100 })
    firstName!: string;

    @Column({ type: 'varchar', length: 6, default: null })
    otp!: string;

    @Column({ type: 'boolean', default: true })
    isActive!: boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @Column({ type: 'timestamptz', nullable: true })
    otpExpiresAt?: Date;

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: "roleId" })
    role!: Role;

    @OneToMany(() => Board, (board) => board.createdBy)
    boards!: Board[];

    @OneToMany(() => BoardMember, (boardMember) => boardMember.board)
    members!: BoardMember[];


}
