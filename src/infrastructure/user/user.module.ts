import { Logger, Module } from '@nestjs/common'
import { UserController } from '@infrastructure/user/user.controller'
import { DataSource } from 'typeorm'
import { UserService } from '@application/user.service'
import { EventModule } from '@infrastructure/event/event.module'
import { UserParticipateController } from '@infrastructure/user/user.participate.controller'
import { EventServiceInterface } from '@application/portInterfaces/event.service.interface'
import { UserParticipateEventService } from '@application/user.participate.event.service'
@Module({
  imports: [EventModule],
  controllers: [UserController, UserParticipateController],
  providers: [{
    provide: 'UserServiceInterface',
    useFactory: (datasource: DataSource) => {
      return new UserService(datasource.getRepository('User'))
    },
    inject: [DataSource]
  },
  {
    provide: 'UserParticipateEventServiceInterface',
    useFactory: (datasource: DataSource, eventService: EventServiceInterface) => {
      return new UserParticipateEventService(datasource.getRepository('User'), eventService, new Logger('UserParticipateEvent'))
    },
    inject: [DataSource, 'EventServiceInterface']
  }],
  exports: ['UserServiceInterface']
})
export class UserModule {
}
