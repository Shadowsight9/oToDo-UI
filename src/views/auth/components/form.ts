export interface FormItem {
  val: string
  isValid: boolean
}

export function validForm(from: { [key: string]: FormItem }) {
  for (const [, v] of Object.entries(from)) {
    v.isValid = true
    if (v.val === '') {
      v.isValid = false
      return false
    }
  }

  return true
}
