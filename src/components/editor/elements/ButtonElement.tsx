import { Button } from '@/components/ui/button'
import { ElementType } from '../ElementSidebar'
import { cn } from '@/lib/utils'

export default function ButtonElement({ element }: { element: ElementType }) {
  const classn = element.tailwindCSS ?? ''
  return (
    <div className='w-full'>
      {/* <Button className={cn(`${element?.tailwindCSS ?? ''}`)} style={element?.style ?? {}}>
        {element.content ?? 'Sample Button'}
      </Button> */}
      <button className={cn('', `${classn ?? ''}`)}>{element.content ?? 'Sample Button'}</button>
    </div>
  )
}
