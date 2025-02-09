// Core
import { DragEvent, useState } from 'react'

// Types
import { ElementType, LayoutType } from '../ElementSidebar'

// Context Providers
import { useDraggedElement, useScreenSize, useTemplateContent } from '@/providers'

// Components
import { Button } from '@/components/ui/button'
import TextElement from './TextElement'

// Utils
import { cn } from '@/lib/utils'
import ImageElement from './ImageElement'

export default function Columns({ element }: { element: LayoutType }) {
  const { screenSize } = useScreenSize()
  const { templateContent, setTemplateContent } = useTemplateContent()
  // console.log('templateContent: ', templateContent)
  const { draggedElement, draggedLayout, setDraggedElement } = useDraggedElement()

  const [onDragOver, setOnDragOver] = useState<{ index: number; columnId?: string } | undefined>()
  console.log('onDragOver: ', onDragOver)

  const class_col = `grid-cols-${element.numOfColumn.toString()}`

  function handleDragOver(e: DragEvent<HTMLDivElement>, index: number) {
    e.preventDefault()
    setOnDragOver({
      index: index,
      columnId: element?.id
    })
  }

  function handleDrop() {
    const index = onDragOver?.index as number
    if (draggedLayout) {
      setDraggedElement(null)
      setOnDragOver(undefined)
      alert('Cannot place column inside a column')
      return false
    }

    setTemplateContent((prevTemplates) =>
      prevTemplates.map((x) =>
        x.id === element.id ? { ...x, [index]: [...(x[index] || []), draggedElement as ElementType] } : x
      )
    )
    setOnDragOver(undefined)
  }

  const renderComponent = (component: ElementType) => {
    if (component.type === 'button') {
      return <Button className='mx-auto w-full'>Button</Button>
    } else if (component.type === 'text') {
      return <TextElement />
    } else if (component.type === 'image') {
      return <ImageElement />
    }

    return <div>idk</div>
  }
  const getElementComponent = (arr: ElementType[] | null) => {
    if (!arr) {
      return <div className='py-2 text-center text-sm'>Drag Elements Here</div>
    }

    return (
      <div className='w-full overflow-hidden'>
        {arr.map((x, index) => {
          return (
            <div key={index} className='w-full flex'>
              {renderComponent(x)}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn(`grid`, `${class_col}`, `${screenSize == 'mobile' && `grid-cols-1`}`, 'w-full')}>
      {Array.from({ length: element.numOfColumn }).map((_, index) => (
        <div
          key={index}
          onDragOver={(element) => handleDragOver(element, index)}
          onDrop={handleDrop}
          onDragLeave={() => {
            setOnDragOver(undefined)
          }}
          className={cn(
            `${!element[index] && 'border border-neutral-400 border-dashed bg-neutral-200'}`,
            `${index == onDragOver?.index && onDragOver.columnId && 'bg-green-100'}`,
            'w-full'
          )}
        >
          {getElementComponent(element[index])}
        </div>
      ))}
    </div>
  )
}
