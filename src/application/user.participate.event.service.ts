import { UserRepositoryInterface } from '@application/portInterfaces/user.repository.interface'
import {
  UserParticipateEventServiceInterface
} from '@application/portInterfaces/user.participate.event.service.interface'
import { EventServiceInterface } from '@application/portInterfaces/event.service.interface'
import { LoggerInterface } from '@application/portInterfaces/logger.interface'

export class UserParticipateEventService implements UserParticipateEventServiceInterface {
  constructor (
    private readonly userRepository: UserRepositoryInterface,
    private readonly eventService: EventServiceInterface,
    private readonly logger: LoggerInterface
  ) {
  }

  async userParticipateEvent (userId: string, eventId: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { id: userId } })
    if (!user) {
      return false
    }
    this.logger.debug('user.events', JSON.stringify(user))
    user.events?.push(eventId)
    const savedUser = await this.userRepository.save(user)
    if (!savedUser) {
      return false
    }

    this.logger.debug('savedUser', JSON.stringify(savedUser))
    this.logger.debug('eventId', eventId)
    const event = await this.eventService.findAll(eventId)
    if (!event) {
      return false
    }
    const { ...eventToUpdate } = event[0]
    this.logger.debug('eventToUpdate', JSON.stringify(eventToUpdate))
    if (eventToUpdate.participants) {
      eventToUpdate.participants.push(({ id: savedUser.id, name: savedUser.name }))
    } else {
      eventToUpdate.participants = [({ id: savedUser.id, name: savedUser.name })]
    }

    this.logger.debug('eventToUpdate', JSON.stringify(eventToUpdate))
    await this.eventService.updateEvent(eventId, eventToUpdate)
    return true
  }
}
