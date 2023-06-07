import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Event } from '@persistence/event.entity.typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    name: string

  @Column()
    email: string

  @Column()
    password: string

  @OneToMany(() => Event, event => event.idUser, { nullable: true })
    events: Event[]
}
