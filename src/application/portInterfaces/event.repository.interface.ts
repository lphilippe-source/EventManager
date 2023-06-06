export interface EventRepositoryInterface {

  save: (event: EventDto) => Promise<EventDto>
  find: () => Promise<EventDto[]>
}
export interface EventDto{
  title?: string

  category?: string

  description?: string

  startTime?: Date

  endTime?: Date

  nbPartipants?: number

  numero?: number

  adresse?: string

  codePostal?: number

  ville?: string

  idUser?: number
}
