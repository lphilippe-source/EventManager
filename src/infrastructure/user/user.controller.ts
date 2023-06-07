import { UserServiceInterface } from '@application/portInterfaces/user.service.interface'
import { Body, Controller, Inject, Post, Request, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { UserDto } from '@application/dto/user.dto'

@Controller('user')
export class UserController {
  constructor (@Inject('UserServiceInterface') private readonly userService: UserServiceInterface) {
  }

  @Post('/register')
  async create (@Body() user: UserDto): Promise<UserDto> {
    return await this.userService.createUser(user)
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login (@Request() req: Record<'user', any>): Promise<UserDto> {
    return req.user
  }
}
