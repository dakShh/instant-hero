import { useSelectedElement, useTemplateContent } from '@/providers'
import { ElementType } from './ElementSidebar'
import ContentSetting from './settings/ContentSetting'
import TailwindSetting from './settings/TailwindSetting'

type FieldNameTypes = 'content' | 'tailwindCSS'

export default function ElementSettings() {
  const { selectedElement, setSelectedElement } = useSelectedElement()
  const { setTemplateContent } = useTemplateContent()

  const onHandleInputChange = (fieldName: FieldNameTypes, value: string) => {
    const updatedData = { ...selectedElement?.element }
    updatedData[fieldName] = value

    setSelectedElement((prevEle) => {
      if (prevEle) {
        return {
          ...prevEle,
          element: updatedData as ElementType
        }
      }
      return prevEle
    })

    // TODO: Make it prettier
    setTemplateContent((columns) =>
      columns.map((column) => {
        if (column.id == selectedElement?.columnId) {
          return {
            ...column,
            [selectedElement?.columnIndex as number]: column[
              selectedElement?.columnIndex as number
            ]?.map((currElement) => {
              if (currElement?.id === selectedElement?.element?.id) {
                return {
                  ...currElement,
                  [fieldName]: value
                }
              }
              return currElement
            }) as ElementType[]
          }
        }
        return column
      })
    )
  }

  return (
    <div className='px-5 py-4'>
      <div className='font-bold text-xl mb-4 '> Settings </div>

      {selectedElement?.element && (
        <ContentSetting
          value={selectedElement?.element?.content ?? ''}
          handleChange={(value) => onHandleInputChange('content', value)}
        />
      )}

      {selectedElement && (
        <TailwindSetting
          value={selectedElement?.element?.tailwindCSS ?? ''}
          handleChange={(value) => onHandleInputChange('tailwindCSS', value)}
        />
      )}
    </div>
  )
}
