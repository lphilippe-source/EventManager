import { EventDto } from '@application/dto/event.dto'

export interface EventRepositoryInterface {

  save: (event: EventDto) => Promise<EventDto>
  find: (eventId: Record<any, Partial<EventDto>> | undefined) => Promise<EventDto[]>
  update: (event: any, partial: Partial<EventDto>) => Promise<any>
}
