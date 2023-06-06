export interface AuthServiceInterface {
  validateUser: (email: string, password: string) => Promise<any>

}
