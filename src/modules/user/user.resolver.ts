import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  public getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Query('user')
  public getOne(@Args('id') id: string): Promise<User> {
    return this.userService.getOne(id);
  }

  @Mutation('userAdd')
  public create(@Args('user') userDto: Partial<UserDto>): Promise<User> {
    return this.userService.save(userDto);
  }

  @Mutation('userEdit')
  public update(
    @Args('id')id: string,
    @Args('user') userDto: Partial<UserDto>,
  ): Promise<User> {
    return this.userService.update(id, userDto);
  }

  @Mutation('usersRemove')
  public deleteByIds(@Args('ids') ids: string[]): Promise<User[]> {
    return this.userService.deleteByIds(ids);
  }

  @Mutation('userRemove')
  public delete(@Args('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }
}
