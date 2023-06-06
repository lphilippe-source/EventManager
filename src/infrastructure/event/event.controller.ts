import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common'
import { EventServiceInterface } from '@application/portInterfaces/event.service.interface'
import { EventDto } from '@application/portInterfaces/event.repository.interface'

@Controller('event')
export class EventController {
  constructor (@Inject('EventServiceInterface') private readonly eventService: EventServiceInterface) {
  }

  @Get()
  async findAll (): Promise<EventDto[]> {
    return await this.eventService.findAll()
  }

  @Get(':id')
  async find (): Promise<EventDto[]> {
    return await this.eventService.findAll()
  }

  @Post()
  async createEvent (@Body() event: EventDto): Promise<EventDto> {
    return await this.eventService.createEvent(event)
  }

  @Post(':id')
  async updateEvent (@Param('id')id: string, @Body()event: EventDto): Promise<boolean> {
    return await this.eventService.updateEvent(id, event)
  }
}
