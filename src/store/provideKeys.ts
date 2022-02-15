import { IUser } from '@/types/IUser'
import { InjectionKey, Ref } from 'vue'

export const userKey = Symbol() as InjectionKey<Ref<IUser>>
