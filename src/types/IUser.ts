interface IUserBase {
  id: BigInt
  name: string
  nickname: string
  email?: string
  telephone?: string
  avatar?: string
  basicTodoListID?: BigInt
}

export interface IUserDTO extends IUserBase {
  createdAt: string
  updatedAt: string
}

export interface IUser extends IUserBase {
  createdAt: Date
  updatedAt: Date
}

export function userDTO2VO(dtoData: IUserDTO) {
  const createdAt = new Date(dtoData.createdAt)
  const updatedAt = new Date(dtoData.updatedAt)
  const voData: IUser = { ...dtoData, createdAt, updatedAt }
  return voData
}
