// Core
import { DragEvent, useState } from 'react'

// Types
import { LayoutType } from './ElementSidebar'

// Utils
import { cn } from '@/lib/utils'

// Context Providers
import { useDraggedElement, useScreenSize, useTemplateContent } from '@/providers'

// Components
import Columns from './elements/Columns'

export default function Canvas() {
  const { screenSize } = useScreenSize()
  const { draggedLayout, setDraggedLayout } = useDraggedElement()
  const { templateContent, setTemplateContent } = useTemplateContent()

  const [onDragOver, setOnDragOver] = useState<boolean>(false)

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setOnDragOver(true)
  }

  function handleDrop() {
    if (draggedLayout) setTemplateContent((prev) => [...prev, draggedLayout])
    setDraggedLayout(null)
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
          // 'overflow-y-scroll max-h-[486px]'
        )}
      >
        <div className='invisible grid-cols-3'></div>
        {templateContent?.length > 0 ? (
          templateContent?.map((content, index) => (
            <div key={index} className='grid w-full'>
              {getLayoutComponent(content)}
            </div>
          ))
        ) : (
          <div className={cn('bg-neutral-200 border border-dashed', 'p-4', 'text-center text-sm')}>
            Add Layouts Here
          </div>
        )}
      </div>
    </div>
  )
}
