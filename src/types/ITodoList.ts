export interface ITodoList {
  id: BigInt
  name: string
  isSharing: boolean
  createdAt: string
  updatedAt: string
  userID: BigInt
  todoListFolderID: BigInt
}
