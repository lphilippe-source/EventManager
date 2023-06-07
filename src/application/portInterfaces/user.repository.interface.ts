import { UserDto } from '@application/dto/user.dto'

export interface UserRepositoryInterface {
  find: () => Promise<UserDto[]>
  save: (user: any) => Promise<UserDto>
  findOne: (username: any) => Promise<UserDto | null>
}
