// Core
import { DragEvent, useState } from 'react'

// Types
import { ElementType, LayoutType } from '../ElementSidebar'

// Context Providers
import { useDraggedElement, useScreenSize, useSelectedElement, useTemplateContent } from '@/providers'

// Components
import { Button } from '@/components/ui/button'
import TextElement from './TextElement'

// Utils
import { cn } from '@/lib/utils'
import ImageElement from './ImageElement'
import ButtonElement from './ButtonElement'

export default function Columns({ element }: { element: LayoutType }) {
  const { screenSize } = useScreenSize()
  const { setTemplateContent } = useTemplateContent()
  const { draggedElement, draggedLayout, setDraggedElement } = useDraggedElement()
  const { selectedElement, setSelectedElement } = useSelectedElement()

  const [onDragOver, setOnDragOver] = useState<{ index: number; columnId?: string } | undefined>()

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

  const renderElement = (element: ElementType) => {
    if (element.type === 'button') {
      // return <Button className='mx-auto w-full'>{element?.content ?? 'Button'}</Button>
      return <ButtonElement element={element} />
    } else if (element.type === 'text') {
      return <TextElement element={element} />
    } else if (element.type === 'image') {
      return <ImageElement />
    }

    return <div>idk</div>
  }
  const getElementComponent = (childrens: ElementType[] | null, columnIndex: number) => {
    if (!childrens) {
      return <div className='py-4 text-center text-sm'>Drag Elements Here</div>
    }

    return (
      <div className='w-full overflow-hidden'>
        {childrens.map((child, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setSelectedElement({ columnId: element?.id ?? '', columnIndex, element: child })
              }}
              className={cn(
                `${selectedElement?.element?.id === child?.id && 'border-2 border-blue-600 border-dashed'}`,
                'w-full flex cursor-pointer'
              )}
            >
              {renderElement(child)}
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
          onClick={() => {
            // layout index: element[index]
          }}
          className={cn(
            `${!element[index] && 'border border-neutral-400 border-dashed bg-neutral-200'}`,
            `${index == onDragOver?.index && onDragOver.columnId && 'bg-green-100'}`,
            'w-full'
          )}
        >
          {getElementComponent(element[index], index)}
        </div>
      ))}
    </div>
  )
}
