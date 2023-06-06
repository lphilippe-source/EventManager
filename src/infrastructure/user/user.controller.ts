import { UserServiceInterface } from '@application/portInterfaces/user.service.interface'
import { UserDto } from '@application/portInterfaces/user.repository.interface'
import { Controller, Get, Inject } from '@nestjs/common'

@Controller('user')
export class UserController {
  constructor (@Inject('UserServiceInterface') private readonly userService: UserServiceInterface) {
  }

  @Get()
  async findAll (): Promise<UserDto[]> {
    return await this.userService.findAll()
  }

  // @Post('/register')
  // async create (user: UserDto): Promise<UserDto> {
  //   return await this.userService.create(user)
  // }

  // @Post()
  // async async (email, password): Promise<UserDto> {
  //   return await this.userService.create(user)
  // }
}
