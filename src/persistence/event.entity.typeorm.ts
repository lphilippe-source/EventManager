import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    title: string

  @Column()
    category: string

  @Column()
    description: string

  @Column()
    startTime: Date

  @Column()
    endTime: Date

  @Column()
    nbPartipants: number

  @Column()
    numero: number

  @Column()
    adresse: string

  @Column()
    codePostal: number

  @Column()
    ville: string

  @Column()
    idUser: number
}
