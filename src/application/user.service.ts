import { UserRepositoryInterface } from '@application/portInterfaces/user.repository.interface'
import { UserServiceInterface } from '@application/portInterfaces/user.service.interface'
import { UserDto } from '@application/dto/user.dto'

export class UserService implements UserServiceInterface {
  constructor (private readonly userRepository: UserRepositoryInterface) { }

  async createUser (user: UserDto): Promise<UserDto> {
    const { password, ...createdUser } = await this.userRepository.save(user)
    return createdUser
  }

  async findOneUser (whereClose: Record<string, any>, login: boolean): Promise<UserDto | null> {
    const user = await this.userRepository.findOne(whereClose)
    if (!login && user?.password) {
      const { password, ...result } = user
      return result
    }
    return user
  }
}
