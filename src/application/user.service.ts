import { UserDto, UserRepositoryInterface } from '@application/portInterfaces/user.repository.interface'
import { UserServiceInterface } from '@application/portInterfaces/user.service.interface'

export class UserService implements UserServiceInterface {
  constructor (private readonly userRepository: UserRepositoryInterface) { }

  async createUser (user: UserDto): Promise<UserDto> {
    const { password, ...createdUser } = await this.userRepository.save(user)
    return createdUser
  }

  async findOneUser (email: string): Promise<UserDto | null> {
    return await this.userRepository.findOne({ where: { email } })
  }
}
