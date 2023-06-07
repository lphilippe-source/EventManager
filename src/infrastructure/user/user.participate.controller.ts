import {
  UserParticipateEventServiceInterface
} from '@application/portInterfaces/user.participate.event.service.interface'
import { Body, Controller, Inject, Post } from '@nestjs/common'
import { UserParticipateDto } from '@application/dto/user.participate.dto'

@Controller('user')
export class UserParticipateController {
  constructor (@Inject('UserParticipateEventServiceInterface')private readonly userParticipateEventService: UserParticipateEventServiceInterface) {}
  @Post('/participate')
  async userParticipateEvent (@Body() { userId, eventId }: UserParticipateDto): Promise<boolean> {
    return await this.userParticipateEventService.userParticipateEvent(userId, eventId)
  }
}
