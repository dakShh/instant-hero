import { cn } from '@/lib/utils'
import { LayoutType } from '../ElementSidebar'
import { useScreenSize } from '@/providers'

export default function Columns({ element }: { element: LayoutType }) {
  const { screenSize } = useScreenSize()
  const class_col = `grid-cols-` + `${element.numOfColumn.toString()}`

  function handleDragOver() {
    console.log('columnId: ', element)
  }

  return (
    <div
      onDragOver={handleDragOver}
      className={cn(`grid gap-2`, `${class_col}`, `${screenSize == 'mobile' && `grid-cols-1`}`)}
    >
      {Array.from({ length: element.numOfColumn }).map((_, index) => (
        <div key={index} className='bg-neutral-300 p-3 text-xs'>
          {element.label}
        </div>
      ))}
    </div>
  )
}
