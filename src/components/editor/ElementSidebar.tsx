import {
  Columns2,
  Columns3,
  LucideIcon,
  RectangleHorizontal
} from 'lucide-react'
import ElementCard from './ElementCard'

export interface ElementType {
  label: string
  type: string
  numOfColumn: number
  icon: LucideIcon
}

const elements: ElementType[] = [
  {
    label: '1Column',
    type: 'column',
    numOfColumn: 1,
    icon: RectangleHorizontal
  },
  {
    label: '2 Column',
    type: 'column-2',
    numOfColumn: 2,
    icon: Columns2
  },
  {
    label: '3 Column',
    type: 'column-3',
    numOfColumn: 3,
    icon: Columns3
  }
]

export default function ElementSidebar() {
  return (
    <div className='px-2 py-4'>
      <div className='font-bold text-xl mb-2'> Layout </div>
      <div className='grid grid-cols-2 gap-4'>
        {elements?.map((element, index) => {
          return <ElementCard key={index} element={element} />
        })}
      </div>
    </div>
  )
}
