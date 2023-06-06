import { Controller, Get, Inject, Post } from '@nestjs/common'
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

  @Post()
  async createEvent (event: EventDto): Promise<EventDto> {
    return await this.eventService.createEvent(event)
  }
}
