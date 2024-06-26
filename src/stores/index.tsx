import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { UserModel } from '@/types/models/user'

interface State {
  isAuthenticated: boolean
  user?: UserModel
  setAuthState: (status: boolean, user?: UserModel) => void
}

export const useAppDataStore = create<State>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: undefined,
      setAuthState: (isAuthenticated, user) => {
        set({ isAuthenticated, user })
      }
    }),
    { name: 'appStore', storage: createJSONStorage(() => sessionStorage) }
  )
)
