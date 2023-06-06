import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { DatabaseModule } from '@infrastructure/database/database.module'
import { LoggerMiddleware } from '@infrastructure/middlewares/logger'
import { EventModule } from '@infrastructure/event/event.module'
import { UserModule } from '@infrastructure/user/user.module'

@Module({
  imports: [
    DatabaseModule,
    EventModule,
    UserModule
  ]

})
export class AppModule implements NestModule {
  configure (consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
