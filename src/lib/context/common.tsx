import { createContext } from 'react'

interface CommonContextType {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const CommonContextProvider = createContext<CommonContextType | undefined>(undefined)
