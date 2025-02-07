import { cn } from '@/lib/utils'
import { ElementType } from './ElementSidebar'

export default function ElementCard({ element }: { element: ElementType }) {
  return (
    <div
      className={cn(
        'border border-dashed rounded-md py-4 flex flex-col items-center justify-center',
        'cursor-pointer',
        'hover:bg-neutral-800 transition-all duration-300'
      )}
    >
      {<element.icon />}
      <p>{element.label}</p>
    </div>
  )
}
