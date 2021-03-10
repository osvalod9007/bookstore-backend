import { ApiProperty } from '@nestjs/swagger';
export class UserDto {
  @ApiProperty({ example: 1, description: 'The id of the user' })
  public id: string;

  @ApiProperty({ example: 'John', description: 'The first name of user' })
  public firstName: string;

  @ApiProperty({ example: 'Doe', description: 'The last name of user' })
  public lastName: string;
}
