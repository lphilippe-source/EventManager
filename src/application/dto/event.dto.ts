export interface EventDto{
  id?: string
  title?: string

  category?: string

  description?: string

  startTime?: Date

  endTime?: Date

  participants?: any[]

  adresse?: string

  codePostal?: number

  ville?: string

  idUser?: number
}
