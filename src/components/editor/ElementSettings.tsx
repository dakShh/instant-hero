import { useSelectedElement, useTemplateContent } from '@/providers'
import InputField from './settings/InputField'
import { ElementType } from './ElementSidebar'

export default function ElementSettings() {
  const { selectedElement, setSelectedElement } = useSelectedElement()
  const { setTemplateContent } = useTemplateContent()

  const onHandleInputChange = (fieldName: 'content', value: string) => {
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
                  content: value
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
      <div className='font-bold text-xl mb-4'> Settings </div>

      {selectedElement?.element?.content && selectedElement?.element?.content && (
        <InputField
          value={selectedElement?.element?.content}
          handleChange={(value) => onHandleInputChange('content', value)}
        />
      )}
    </div>
  )
}
