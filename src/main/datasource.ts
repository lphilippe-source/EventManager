import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm'
import { Event } from '@persistence/event.entity.typeorm'
import { User } from '@persistence/user.entity.typeorm'

export const config: TypeOrmModuleAsyncOptions = {
  useFactory: () => ({
    type: 'postgres',
    host: 'database',
    port: 5432,
    username: 'username',
    password: 'password',
    database: 'event',
    entities: [
      Event,
      User
    ],
    synchronize: true,
    logging: true
  }
  )
}
