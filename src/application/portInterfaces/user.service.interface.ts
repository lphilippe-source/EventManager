import { UserDto } from '@application/portInterfaces/user.repository.interface'

export interface UserServiceInterface {
  findAll: () => Promise<UserDto[]>
  create: (user: UserDto) => Promise<UserDto>
}
