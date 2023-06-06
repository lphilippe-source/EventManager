import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { DatabaseModule } from '@infrastructure/database/database.module'
import { LoggerMiddleware } from '@infrastructure/middlewares/logger'
import { EventModule } from '@infrastructure/event/event.module'
import { UserModule } from '@infrastructure/user/user.module'
import { PassportModule } from '@nestjs/passport'
import { AuthModule } from '@infrastructure/auth/auth.module'

@Module({
  imports: [
    DatabaseModule,
    EventModule,
    UserModule,
    PassportModule,
    AuthModule
  ]
})
export class AppModule implements NestModule {
  configure (consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
