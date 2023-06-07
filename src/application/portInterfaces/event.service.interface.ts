import { EventDto } from '@application/dto/event.dto'

export interface EventServiceInterface {
  findAll: (any: any | undefined) => Promise<EventDto[]>
  createEvent: (event: EventDto) => Promise<EventDto>
  updateEvent: (id: string, event: EventDto) => Promise<any>
}
