import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm'

export const config: TypeOrmModuleAsyncOptions = {
  useFactory: () => ({
    type: 'postgres',
    host: 'database',
    port: 5432,
    username: 'username',
    password: 'password',
    database: 'event',
    entities: [
    ],
    synchronize: true,
    logging: true
  }
  )
}
