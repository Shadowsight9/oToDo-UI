import { useDataStore } from '@/store/dataStore'
import { getCurrentUser } from '@/apis'

export { register } from '@/apis'

export async function refreshUser() {
  const s = useDataStore()
  s.setUser(await getCurrentUser())
}
