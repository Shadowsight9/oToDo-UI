export interface ILoginResponse {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token?: string
}
