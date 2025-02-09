import { ElementType, LayoutType } from '@/components/editor/ElementSidebar'
import { createContext } from 'react'

interface CommonContextType {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

interface ScreenSizeContextType {
  screenSize: 'desktop' | 'mobile'
  setScreenSize: React.Dispatch<React.SetStateAction<'desktop' | 'mobile'>>
}

interface DragDropLayoutContextType {
  draggedLayout: LayoutType | null
  setDraggedLayout: React.Dispatch<React.SetStateAction<LayoutType | null>>
  draggedElement: ElementType | null
  setDraggedElement: React.Dispatch<React.SetStateAction<ElementType | null>>
}

interface TemplateContentContextType {
  templateContent: LayoutType[]
  setTemplateContent: React.Dispatch<React.SetStateAction<LayoutType[]>>
}

export const CommonContextProvider = createContext<CommonContextType | undefined>(undefined)

export const ScreenSizeContext = createContext<ScreenSizeContextType | undefined>(undefined)

export const DragDropLayoutContext = createContext<DragDropLayoutContextType | null>(null)

export const TemplateContentContext = createContext<TemplateContentContextType | undefined>(undefined)
