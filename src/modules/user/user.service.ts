import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) {}

  save(user: Partial<User>): Promise<User> {
    if (!user || !user.firstName || !user.lastName) {
      throw new BadRequestException(
        `A pet must have at least name and animalType defined`,
      );
    }
    console.log(user);
    const userSave = new User(user);
    return this.userRepository.save(userSave);
  }
}
