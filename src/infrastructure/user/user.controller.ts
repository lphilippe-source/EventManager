import { UserServiceInterface } from '@application/portInterfaces/user.service.interface'
import { UserDto } from '@application/portInterfaces/user.repository.interface'
import { Controller, Get, Inject, Post } from '@nestjs/common'

@Controller('user')
export class UserController {
  constructor (@Inject('UserServiceInterface') private readonly userService: UserServiceInterface) {
  }

  @Get()
  async findAll (): Promise<UserDto[]> {
    return await this.userService.findAll()
  }

  @Post()
  async create (user: UserDto): Promise<UserDto> {
    return await this.userService.create(user)
  }
}
