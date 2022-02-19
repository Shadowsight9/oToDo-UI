export interface ILoginResponse {
  accessToken: string
  tokenType: string
  expiresIn: number
  refreshToken?: string
}
