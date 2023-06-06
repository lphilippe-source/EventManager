
import { Module } from '@nestjs/common'
import { DatabaseModule } from '@infrastructure/database/database.module'
import { EventService } from '@application/event.service'
import { DataSource } from 'typeorm'

@Module({
  imports: [DatabaseModule],
  providers: [

    {
      provide: 'EventServiceInterface',
      useFactory: (datasource: DataSource) => {
        return new EventService(datasource.getRepository('Event'))
      },
      inject: [DataSource]
    }
  ],
  exports: [],
  controllers: []
})
export class EventModule {}
