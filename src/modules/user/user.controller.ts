import { Controller, Post, Body } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() user: Partial<User>): Promise<User> {
    return this.userService.save(user);
  }
}
