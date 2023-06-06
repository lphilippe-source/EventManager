import { Module } from '@nestjs/common'
import { DatabaseModule } from '@infrastructure/database/database.module'
import { UserController } from '@infrastructure/user/user.controller'
import { DataSource } from 'typeorm'
import { UserService } from '@application/user.service'
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [{
    provide: 'UserServiceInterface',
    useFactory: (datasource: DataSource) => {
      return new UserService(datasource.getRepository('User'))
    },
    inject: [DataSource]

  }]
})
export class UserModule {
}
