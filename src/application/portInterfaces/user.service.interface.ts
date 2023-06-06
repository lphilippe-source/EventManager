import { UserDto } from '@application/portInterfaces/user.repository.interface'

export interface UserServiceInterface {
  createUser: (user: UserDto) => Promise<UserDto>
  findOneUser: (username: string) => Promise<UserDto | null>
}
