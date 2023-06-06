import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from '@main/datasource'

@Module({
  controllers: [],
  imports: [TypeOrmModule.forRootAsync(
    config
  )]
})
export class DatabaseModule {}
