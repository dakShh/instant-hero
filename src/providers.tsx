'use client'
import React, { useContext, useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import {
  CommonContextProvider,
  DragDropLayoutContext,
  ScreenSizeContext,
  SelectedElementContext,
  TemplateContentContext
} from './lib/context/common'
import { ElementType, LayoutType } from './components/editor/ElementSidebar'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [screenSize, setScreenSize] = useState<'desktop' | 'mobile'>('desktop')
  const [draggedLayout, setDraggedLayout] = useState<LayoutType | null>(null)
  const [draggedElement, setDraggedElement] = useState<ElementType | null>(null)
  const [templateContent, setTemplateContent] = useState<LayoutType[]>([])
  const [selectedElement, setSelectedElement] = useState<{
    element: ElementType
    columnIndex: number
    columnId: string
  } | null>(null)

  useEffect(() => {
    if (typeof window !== undefined) {
      const templateContent = JSON.parse(localStorage.getItem('templateContent')!)
      setTemplateContent(templateContent)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem('templateContent', JSON.stringify(templateContent))
    }
  }, [templateContent])

  // Clear the state when ESC is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedElement(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return (
    <SessionProvider>
      <CommonContextProvider.Provider value={{ loading, setLoading }}>
        <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
          <DragDropLayoutContext.Provider
            value={{ draggedLayout, setDraggedLayout, draggedElement, setDraggedElement }}
          >
            <TemplateContentContext.Provider value={{ templateContent, setTemplateContent }}>
              <SelectedElementContext.Provider value={{ selectedElement, setSelectedElement }}>
                {children}
              </SelectedElementContext.Provider>
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

export const useSelectedElement = () => {
  const context = useContext(SelectedElementContext)
  if (!context) {
    throw new Error('useTemplateContent must be used within a TemplateContentContext')
  }

  return context
}
