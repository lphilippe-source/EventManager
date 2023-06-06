export interface UserRepositoryInterface {
  find: () => Promise<UserDto[]>
  save: (user: any) => Promise<UserDto>
}
export interface UserDto {
  id?: string
  name?: string
  email?: string
  password?: string
}
