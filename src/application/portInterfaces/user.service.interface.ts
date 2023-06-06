import { UserDto } from '@application/portInterfaces/user.repository.interface'

export interface UserServiceInterface {
  findAll: () => Promise<UserDto[]>
  createUser: (user: UserDto) => Promise<UserDto>
  findOneUser: (username: string) => Promise<UserDto | null>
}
