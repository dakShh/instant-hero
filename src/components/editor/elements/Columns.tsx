import { cn } from '@/lib/utils'
import { LayoutType } from '../ElementSidebar'
import { useScreenSize } from '@/providers'
import { DragEvent } from 'react'

export default function Columns({ element }: { element: LayoutType }) {
  const { screenSize } = useScreenSize()

  const class_col = `grid-cols-` + `${element.numOfColumn.toString()}`

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    console.log('columnId: ', element)
  }
  function handleDrop() {
    console.log('drop inside layout', element)
    // if (draggedElement) setTemplateContent((prev) => [...prev, draggedElement])
    // setDraggedElement(null)
    // setOnDragOver(false)
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
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
