import { UserRepositoryInterface } from '@application/portInterfaces/user.repository.interface'
import {
  UserParticipateEventServiceInterface
} from '@application/portInterfaces/user.participate.event.service.interface'
import { EventServiceInterface } from '@application/portInterfaces/event.service.interface'

export class UserParticipateEventService implements UserParticipateEventServiceInterface {
  constructor (private readonly userRepository: UserRepositoryInterface,
    private readonly eventService: EventServiceInterface
  ) {
  }

  async userParticipateEvent (userId: string, eventId: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { id: userId } })
    if (!user) {
      return false
    }
    user.events?.push(eventId)
    const savedUser = await this.userRepository.save(user)
    if (!savedUser) {
      return false
    }

    const event = await this.eventService.findAll({ where: { id: eventId } })
    if (!event) {
      return false
    }
    const { ...eventToUpdate } = event[0]
    if (eventToUpdate.participants) {
      eventToUpdate.participants.push(({ id: savedUser.id, name: savedUser.name }))
    } else {
      eventToUpdate.participants = [({ id: savedUser.id, name: savedUser.name })]
    }
    await this.eventService.updateEvent(eventId, eventToUpdate)
    return true
  }
}
