export interface UserRepositoryInterface {
  find: () => Promise<UserDto[]>
  save: (user: any) => Promise<UserDto>
  findOne: (username: any) => Promise<UserDto | null>
}
export interface UserDto {
  id?: string
  name?: string
  email?: string
  password?: string
}
