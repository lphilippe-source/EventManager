export interface EventRepositoryInterface {

  addEvent: (event: any) => Promise<any>
  createEvent: (event: any) => Promise<any>
}
