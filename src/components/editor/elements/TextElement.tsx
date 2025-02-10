import { cn } from '@/lib/utils'
import { ElementType } from '../ElementSidebar'

export default function TextElement({ element }: { element: ElementType }) {
  return (
    <div className='w-full'>
      <h2 className={cn(`${element?.tailwindCSS ?? ''}`)}>{element.content ?? `Sample Text 1`}</h2>
    </div>
  )
}
