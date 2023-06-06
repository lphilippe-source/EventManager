
import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Inject, Logger, UnauthorizedException } from '@nestjs/common'
import { AuthServiceInterface } from '@application/portInterfaces/auth.service.interface'

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor (@Inject('AuthServiceInterface') private readonly authService: AuthServiceInterface,
    private readonly logger: Logger) {
    super({ usernameField: 'email' })
  }

  async validate (email: string, password: string): Promise<any> {
    this.logger.debug('email---->', email)
    const user = await this.authService.validateUser(email, password)
    this.logger.debug('user---->', user)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
