
import { Module } from '@nestjs/common'
import { EventService } from '@application/event.service'
import { DataSource } from 'typeorm'
import { EventController } from '@infrastructure/event/event.controller'

@Module({
  imports: [],
  providers: [
    {
      provide: 'EventServiceInterface',
      useFactory: (datasource: DataSource) => {
        return new EventService(datasource.getRepository('Event'))
      },
      inject: [DataSource]
    }
  ],
  exports: ['EventServiceInterface'],
  controllers: [EventController]
})
export class EventModule {}
