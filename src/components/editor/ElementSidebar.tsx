// Icons
import {
  CirclePower,
  Columns2,
  Columns3,
  Image,
  LucideIcon,
  RectangleHorizontal,
  Type
} from 'lucide-react'

// Context Providers
import { useDraggedElement } from '@/providers'

// Components
import LayoutCard from './LayoutCard'
import ElementCard from './ElementCard'

export interface LayoutType {
  label: string
  type: string
  numOfColumn: number
  icon: LucideIcon
  id?: string
  [key: number]: ElementType[] | null
}

export interface ElementType {
  label: string
  type: string
  icon: LucideIcon
  id?: string
}

const LAYOUTS: LayoutType[] = [
  {
    label: 'Single Column',
    type: 'column',
    numOfColumn: 1,
    icon: RectangleHorizontal
  },
  {
    label: 'Two Column',
    type: 'column',
    numOfColumn: 2,
    icon: Columns2
  },
  {
    label: 'Three Column',
    type: 'column',
    numOfColumn: 3,
    icon: Columns3
  }
]

const ELEMENTS: ElementType[] = [
  {
    label: 'Button',
    type: 'button',
    icon: CirclePower
  },
  {
    label: 'Text',
    type: 'text',
    icon: Type
  },
  {
    label: 'Image',
    type: 'image',
    icon: Image
  }
]
export default function ElementSidebar() {
  const { setDraggedLayout, setDraggedElement } = useDraggedElement()

  function onDragLayoutStart(layout: LayoutType) {
    setDraggedLayout({ ...layout, id: Date.now().toString() })
  }

  function onDragElementStart(element: ElementType) {
    setDraggedElement({ ...element, id: Date.now().toString() })
  }

  return (
    <div className='px-5 py-4'>
      <div className='font-bold text-xl mb-4'> Layout </div>
      <div className='grid grid-cols-1 gap-4'>
        {LAYOUTS?.map((layout, index) => {
          return (
            <div
              key={index}
              draggable
              onDragStart={() => onDragLayoutStart(layout)}
              onDragEnd={() => {
                setDraggedLayout(null)
              }}
            >
              <LayoutCard layout={layout} />
            </div>
          )
        })}
      </div>

      <div className='font-bold text-xl mb-4 mt-10'> Elements </div>
      <div className='grid grid-cols-1 gap-4'>
        {ELEMENTS?.map((element, index) => {
          return (
            <div
              key={index}
              draggable
              onDragStart={() => onDragElementStart(element)}
              onDragEnd={() => {
                setDraggedElement(null)
              }}
            >
              <ElementCard element={element} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
