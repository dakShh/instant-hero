import { CirclePower, Columns2, Columns3, LucideIcon, RectangleHorizontal } from 'lucide-react'
import { useDraggedElement } from '@/providers'
import LayoutCard from './LayoutCard'
import ElementCard from './ElementCard'

export interface LayoutType {
  label: string
  type: string
  numOfColumn: number
  icon: LucideIcon
  id?: string
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
  }
]
export default function ElementSidebar() {
  const { setDraggedElement } = useDraggedElement()

  function onDragLayoutStart(layout: LayoutType) {
    setDraggedElement({ ...layout, id: Date.now().toString() })
  }

  return (
    <div className='px-5 py-4'>
      <div className='font-bold text-xl mb-4'> Layout </div>
      <div className='grid grid-cols-2 gap-4'>
        {LAYOUTS?.map((layout, index) => {
          return (
            <div
              key={index}
              draggable
              onDragStart={() => onDragLayoutStart(layout)}
              onDragEnd={() => {
                setDraggedElement(null)
              }}
            >
              <LayoutCard layout={layout} />
            </div>
          )
        })}
      </div>

      <div className='font-bold text-xl mb-4 mt-10'> Elements </div>
      <div className='grid grid-cols-2 gap-4'>
        {ELEMENTS?.map((element, index) => {
          return (
            <div key={index} draggable>
              <ElementCard element={element} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
