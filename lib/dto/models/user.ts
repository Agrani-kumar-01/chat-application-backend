import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  DeleteDateColumn,
} from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 50 })
  @Index()
  email: string;

  @Column({ unique: true, length: 50 })
  userName: string;

  @Column({ length: 100 })
  fullName: string;

  @Column({ type: "text", nullable: true })
  bio: string;

  @Column({ nullable: true })
  profilePhoto: string;

  @Column({ length: 50 })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(
    id: number,
    email: string,
    userName: string,
    fullName: string,
    bio: string,
    profilePhoto: string,
    password: string,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
  ) {
    this.id = id;
    this.email = email;
    this.userName = userName;
    this.fullName = fullName;
    this.bio = bio;
    this.profilePhoto = profilePhoto;
    this.password = password;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt =  deletedAt;
  }
}
