import { Columns2, Columns3, LucideIcon, RectangleHorizontal } from 'lucide-react'
import { useDraggedElement } from '@/providers'
import LayoutCard from './LayoutCard'

export interface LayoutType {
  label: string
  type: string
  numOfColumn: number
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

export default function ElementSidebar() {
  const { setDraggedElement } = useDraggedElement()

  function onDragLayoutStart(element: LayoutType) {
    setDraggedElement({ ...element, id: Date.now().toString() })
  }

  return (
    <div className='px-5 py-4'>
      <div className='font-bold text-xl mb-4'> Layout </div>
      <div className='grid grid-cols-2 gap-4'>
        {LAYOUTS?.map((layout, index) => {
          return (
            <div key={index} draggable onDragStart={() => onDragLayoutStart(layout)}>
              <LayoutCard layout={layout} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
