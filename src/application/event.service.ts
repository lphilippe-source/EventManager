import { EventRepositoryInterface } from '@application/portInterfaces/event.repository.interface'

export class EventService {
  constructor (private readonly eventRepository: EventRepositoryInterface) {
  }

  async addEvent (event: any): Promise<any> {
    // return await this.eventRepository.addEvent(event)
    await this.eventRepository.createEvent(event)
  }
}
