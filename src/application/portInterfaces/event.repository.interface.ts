export interface EventRepositoryInterface {

  save: (event: EventDto) => Promise<EventDto>
  find: () => Promise<EventDto[]>
  update: (event: any, partial: Partial<EventDto>) => Promise<any>
}
export interface EventDto{
  id?: string
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
