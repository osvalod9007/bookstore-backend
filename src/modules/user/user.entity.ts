import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
@Entity('users')
export class User {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createAt: Date;

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
