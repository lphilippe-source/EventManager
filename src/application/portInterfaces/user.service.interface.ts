import { UserDto } from '@application/dto/user.dto'

export interface UserServiceInterface {
  createUser: (user: UserDto) => Promise<UserDto>
  findOneUser: (whereclose: Record<any, any>, login: boolean) => Promise<UserDto | null>
}
