import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) {}

  public async save(user: Partial<UserDto>): Promise<User> {
    if (!user || !user.firstName || !user.lastName) {
      throw new BadRequestException(
        `A pet must have at least name and animalType defined`,
      );
    }
    const userSave = this.userRepository.create(user);
    return this.userRepository.save(userSave);
  }

  public async update(id: string, user: Partial<UserDto>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOneOrFail(id);
  }

  public async deleteByIds(ids: string[]): Promise<User[]> {
    let users: User[] = [];
    for (let i in ids) {
      users[i] = await this.userRepository.findOneOrFail(ids[i]);
    }
    return await this.userRepository.remove(users);
  }

  public async delete(id: string): Promise<User> {
    const user = await this.userRepository.findOneOrFail(id)
    return await this.userRepository.remove(user);
  }

  public getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public getOne(id: string): Promise<User> {
    return this.userRepository.findOneOrFail(id);
  }
}
