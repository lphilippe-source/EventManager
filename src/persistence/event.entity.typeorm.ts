import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '@persistence/user.entity.typeorm'

@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    title: string

  @Column()
    category: string

  @Column({ nullable: true })
    description: string

  @Column()
    startTime: string

  @Column()
    endTime: string

  @Column({ type: 'jsonb', nullable: true })
    participants: string[]

  @Column({ nullable: true })
    numero: number

  @Column({ nullable: true })
    adresse: string

  @Column({ nullable: true })
    codePostal: number

  @Column({ nullable: true })
    ville: string

  @ManyToOne(() => User, user => user.events)
    idUser: User
}
