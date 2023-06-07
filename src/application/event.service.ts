import { EventRepositoryInterface } from '@application/portInterfaces/event.repository.interface'
import { EventServiceInterface } from '@application/portInterfaces/event.service.interface'
import { EventDto } from '@application/dto/event.dto'

export class EventService implements EventServiceInterface {
  constructor (private readonly eventRepository: EventRepositoryInterface) {
  }

  async findAll (eventId: any = null): Promise<EventDto[]> {
    return await this.eventRepository.find(eventId || {})
  }

  async createEvent (event: EventDto): Promise<EventDto> {
    return await this.eventRepository.save(event)
  }

  async updateEvent (id: string, event: EventDto): Promise<any> {
    return await this.eventRepository.update({ id }, event)
  }
}
