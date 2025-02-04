import { cn } from '@/lib/utils'
import { ElementType } from './ElementSidebar'

export default function ElementCard({ element }: { element: ElementType }) {
  return (
    <div
      draggable
      className={cn(
        'border border-dashed rounded-md py-4 flex flex-col items-center justify-center'
      )}
    >
      {<element.icon />}
      <p>{element.label}</p>
    </div>
  )
}
