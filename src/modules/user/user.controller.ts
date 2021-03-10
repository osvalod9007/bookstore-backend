import { Controller, Post, Body, Get, Put, Delete, Query } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { ObjectUtils } from '../../utils/object.utils';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: UserDto})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createUser(@Body() user: Partial<UserDto>): Promise<User> {
    return this.userService.save(user);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found all records',
    type: UserDto
  })
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  // @Delete()
  // public delete(@Query() query: object): Promise<User[]> {
  //   const ids = ObjectUtils.getObjectValues(query);
  //
  //   return this.userService.delete(ids);
  // }

}
