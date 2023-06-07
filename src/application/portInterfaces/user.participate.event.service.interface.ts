export interface UserParticipateEventServiceInterface {
  userParticipateEvent: (userId: string, eventId: string) => Promise<boolean>
}
