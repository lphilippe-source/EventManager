
import { UserServiceInterface } from '@application/portInterfaces/user.service.interface'
import { AuthServiceInterface } from '@application/portInterfaces/auth.service.interface'

export class AuthService implements AuthServiceInterface {
  constructor (private readonly userService: UserServiceInterface) {}

  async validateUser (email: string, password: string): Promise<any> {
    const user = await this.userService.findOneUser(email)
    if (user && user.password === password) {
      const { password, ...result } = user
      return result
    }
    return null
  }
}
