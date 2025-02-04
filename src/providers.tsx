'use client'
import React, { useContext, useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import { CommonContextProvider } from './lib/context/common'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <SessionProvider>
      <CommonContextProvider.Provider value={{ loading, setLoading }}>
        {children}
      </CommonContextProvider.Provider>
    </SessionProvider>
  )
}

export const useCommonContext = () => {
  const context = useContext(CommonContextProvider)
  if (!context) {
    throw new Error(
      'useCommonContext must be used within a CommonContextProvider'
    )
  }
  return context
}
