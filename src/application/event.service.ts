import { EventDto, EventRepositoryInterface } from '@application/portInterfaces/event.repository.interface'

export class EventService {
  constructor (private readonly eventRepository: EventRepositoryInterface) {
  }

  async findAll (): Promise<EventDto[]> {
    return await this.eventRepository.find()
  }

  async createEvent (event: EventDto): Promise<EventDto> {
    return await this.eventRepository.save(event)
  }
}
