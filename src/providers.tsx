'use client'
import React, { useContext, useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import {
  CommonContextProvider,
  DragDropLayoutContext,
  ScreenSizeContext,
  TemplateContentContext
} from './lib/context/common'
import { ElementType } from './components/editor/ElementSidebar'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [screenSize, setScreenSize] = useState<'desktop' | 'mobile'>('desktop')
  const [draggedElement, setDraggedElement] = useState<ElementType | null>(null)
  const [templateContent, setTemplateContent] = useState<ElementType[]>([])

  return (
    <SessionProvider>
      <CommonContextProvider.Provider value={{ loading, setLoading }}>
        <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
          <DragDropLayoutContext.Provider value={{ draggedElement, setDraggedElement }}>
            <TemplateContentContext.Provider value={{ templateContent, setTemplateContent }}>
              {children}
            </TemplateContentContext.Provider>
          </DragDropLayoutContext.Provider>
        </ScreenSizeContext.Provider>
      </CommonContextProvider.Provider>
    </SessionProvider>
  )
}

export const useCommonContext = () => {
  const context = useContext(CommonContextProvider)
  if (!context) {
    throw new Error('useCommonContext must be used within a CommonContextProvider')
  }
  return context
}

export const useScreenSize = () => {
  const context = useContext(ScreenSizeContext)
  if (!context) {
    throw new Error('useScreenSize must be used within a ScreenSizeContext')
  }
  return context
}

export const useDraggedElement = () => {
  const context = useContext(DragDropLayoutContext)
  if (!context) {
    throw new Error('useDraggedElement must be used within a DragDropLayoutContext')
  }

  return context
}

export const useTemplateContent = () => {
  const context = useContext(TemplateContentContext)
  if (!context) {
    throw new Error('useTemplateContent must be used within a TemplateContentContext')
  }

  return context
}
