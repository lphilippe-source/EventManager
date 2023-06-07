import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common'
import { EventServiceInterface } from '@application/portInterfaces/event.service.interface'
import { EventDto } from '@application/dto/event.dto'

@Controller('event')
export class EventController {
  constructor (@Inject('EventServiceInterface') private readonly eventService: EventServiceInterface
  ) {
  }

  @Get()
  async findAll (und: undefined): Promise<EventDto[]> {
    return await this.eventService.findAll(und)
  }

  @Get(':id')
  async find (@Param('id')id: string): Promise<EventDto[]> {
    return await this.eventService.findAll(id)
  }

  @Post('/create')
  async createEvent (@Body() event: EventDto): Promise<EventDto> {
    return await this.eventService.createEvent(event)
  }

  @Post(':id')
  async updateEvent (@Param('id')id: string, @Body()event: EventDto): Promise<boolean> {
    return await this.eventService.updateEvent(id, event)
  }
}
