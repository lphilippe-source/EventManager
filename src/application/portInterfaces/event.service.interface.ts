import { EventDto } from '@application/portInterfaces/event.repository.interface'

export interface EventServiceInterface {
  findAll: () => Promise<EventDto[]>
  createEvent: (event: EventDto) => Promise<EventDto>
  updateEvent: (id: string, event: EventDto) => Promise<any>
}
