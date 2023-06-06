import { Module } from '@nestjs/common'
import { UserController } from '@infrastructure/user/user.controller'
import { DataSource } from 'typeorm'
import { UserService } from '@application/user.service'
@Module({
  imports: [],
  controllers: [UserController],
  providers: [{
    provide: 'UserServiceInterface',
    useFactory: (datasource: DataSource) => {
      return new UserService(datasource.getRepository('User'))
    },
    inject: [DataSource]
  }],
  exports: ['UserServiceInterface']
})
export class UserModule {
}
