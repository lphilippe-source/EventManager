import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { DatabaseModule } from '@infrastructure/database/database.module'
import { LoggerMiddleware } from '@infrastructure/middlewares/logger'

@Module({
  imports: [
    DatabaseModule
  ]

})
export class AppModule implements NestModule {
  configure (consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
