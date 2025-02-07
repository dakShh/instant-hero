import { cn } from '@/lib/utils'
import { useDraggedElement, useScreenSize, useTemplateContent } from '@/providers'
import { DragEvent, useState } from 'react'
import { ElementType, LayoutType } from './ElementSidebar'
import Columns from './elements/Columns'

export default function Canvas() {
  const { screenSize } = useScreenSize()
  const { draggedElement, setDraggedElement } = useDraggedElement()
  const { templateContent, setTemplateContent } = useTemplateContent()

  const [onDragOver, setOnDragOver] = useState<boolean>(false)

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setOnDragOver(true)
  }

  function handleDrop() {
    if (draggedElement) setTemplateContent((prev) => [...prev, draggedElement])
    setDraggedElement(null)
    setOnDragOver(false)
  }

  const getLayoutComponent = (element: LayoutType) => {
    return <Columns element={element} />
  }

  return (
    <div className='p-10 flex justify-center '>
      <div
        onDragOver={handleDragOver}
        onDragLeave={() => setOnDragOver(false)}
        onDrop={handleDrop}
        className={cn(
          `${screenSize == 'desktop' && 'max-w-7xl'}`,
          `${screenSize == 'mobile' && 'max-w-sm'}`,
          `${onDragOver ? 'bg-secondary' : 'bg-white'}`,
          'w-full p-4',
          'text-secondary-foreground'
        )}
      >
        <div className='invisible grid-cols-3'></div>
        {templateContent?.length > 0 ? (
          templateContent?.map((content, index) => (
            <div key={index} className='mb-2 grid'>
              {getLayoutComponent(content)}
            </div>
          ))
        ) : (
          <div className={cn('bg-neutral-200 border border-dashed', 'p-4', 'text-center')}>
            Add Layouts Here
          </div>
        )}
      </div>
    </div>
  )
}
