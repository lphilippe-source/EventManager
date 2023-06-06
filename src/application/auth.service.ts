
import { UserServiceInterface } from '@application/portInterfaces/user.service.interface'
import { AuthServiceInterface } from '@application/portInterfaces/auth.service.interface'

export class AuthService implements AuthServiceInterface {
  constructor (private readonly usersService: UserServiceInterface) {}

  async validateUser (username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneUser(username)
    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }
    return null
  }
}
