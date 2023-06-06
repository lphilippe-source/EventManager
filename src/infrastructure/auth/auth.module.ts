import { Logger, Module } from '@nestjs/common'
import { UserModule } from '@infrastructure/user/user.module'
import { AuthService } from '@application/auth.service'
import { DataSource } from 'typeorm'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from '@infrastructure/auth/auth.local.strategy'
import { AuthServiceInterface } from '@application/portInterfaces/auth.service.interface'
import { UserServiceInterface } from '@application/portInterfaces/user.service.interface'

@Module({
  imports: [UserModule, PassportModule],
  providers: [{
    provide: 'AuthServiceInterface',
    useFactory: (datasource: DataSource, userService: UserServiceInterface) => {
      return new AuthService(userService)
    },
    inject: [DataSource, 'UserServiceInterface']
  }, {
    provide: LocalStrategy,
    useFactory: (authService: AuthServiceInterface) => {
      return new LocalStrategy(authService, new Logger('AuthLocalStrategy'))
    },
    inject: ['AuthServiceInterface']
  }]
})
export class AuthModule {}
