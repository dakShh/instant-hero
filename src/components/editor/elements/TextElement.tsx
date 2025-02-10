import { ElementType } from '../ElementSidebar'

export default function TextElement({ element }: { element: ElementType }) {
  return (
    <div className='w-full text-center p-4'>
      <h2 className=''>{element.content ?? `Sample Text 1`}</h2>
    </div>
  )
}
