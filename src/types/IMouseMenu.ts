export interface IMenuItem {
  text: string
  id?: number
  iconName: string
}

export interface IMenuPosition {
  top?: string
  left?: string
  right?: string
  bottom?: string
}

export interface IMenuProps {
  data: IMenuItem[]
  handler: (index: number, id?: number) => void
}
