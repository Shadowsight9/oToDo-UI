import jwtDecode, { JwtPayload } from 'jwt-decode'

export const jwtToExpireTime = (token: string) => {
  const timeStamp = jwtDecode<JwtPayload>(token).exp
  if (typeof timeStamp === 'number') {
    return new Date(timeStamp * 1000)
  } else {
    throw new TypeError('cannot extract time from jwt')
  }
}
