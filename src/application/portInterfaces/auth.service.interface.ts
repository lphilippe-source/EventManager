export interface AuthServiceInterface {
  validateUser: (username: string, pass: string) => Promise<any>

}
