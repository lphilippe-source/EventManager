import { UserDto } from '@application/dto/user.dto'

export interface UserServiceInterface {
  createUser: (user: UserDto) => Promise<UserDto>
  findOneUser: (username: string) => Promise<UserDto | null>
}
