import { EventDto, EventRepositoryInterface } from '@application/portInterfaces/event.repository.interface'
import { EventServiceInterface } from '@application/portInterfaces/event.service.interface'

export class EventService implements EventServiceInterface {
  constructor (private readonly eventRepository: EventRepositoryInterface) {
  }

  async findAll (): Promise<EventDto[]> {
    return await this.eventRepository.find()
  }

  async createEvent (event: EventDto): Promise<EventDto> {
    return await this.eventRepository.save(event)
  }

  async updateEvent (id: string, event: EventDto): Promise<any> {
    return await this.eventRepository.update({ id }, event)
  }
}
