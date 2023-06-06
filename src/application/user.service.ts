import { UserDto, UserRepositoryInterface } from '@application/portInterfaces/user.repository.interface'
import { UserServiceInterface } from '@application/portInterfaces/user.service.interface'

export class UserService implements UserServiceInterface {
  constructor (private readonly userRepository: UserRepositoryInterface) { }

  async findAll (): Promise<UserDto[]> {
    return await this.userRepository.find()
  }

  async create (user: UserDto): Promise<UserDto> {
    return await this.userRepository.save(user)
  }
}
