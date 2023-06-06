import { Module } from '@nestjs/common'
import { AppModule } from '@infrastructure/app.module'
import { NestFactory } from '@nestjs/core'
import 'module-alias/register'
declare const module: any

@Module({
  imports: [
    AppModule
  ]
})
export class MainModule {
  async bootstrap (): Promise<void> {
    const app = await NestFactory.create(AppModule,
      {
        logger: ['error', 'debug'],
        cors:
        {
          credentials: true,
          methods: ['GET', 'POST', 'PUT', 'DELETE'],
          origin: '*',
          allowedHeaders: ['Content-Type', 'Authorization']
        }
      }
    )

    await app.listen(3000, () => {
      console.log('Server running on port 3000')
    })
    if (module.hot) {
      module.hot.accept()
      module.hot.dispose(async () => await app.close())
    }
  }
}
