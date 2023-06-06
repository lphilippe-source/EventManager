import { Module } from '@nestjs/common'
import { UserModule } from '@infrastructure/user/user.module'
import { AuthService } from '@application/auth.service'
import { UserService } from '@application/user.service'
import { DataSource } from 'typeorm'

@Module({
  imports: [UserModule],
  providers: [{
    provide: 'AuthServiceInterface',
    useFactory: (datasource: DataSource) => {
      return new AuthService(new UserService(datasource.getRepository('User')))
    },
    inject: [DataSource]
  }]
})
export class AuthModule {}
