import { cn } from '@/lib/utils'
import { ElementType } from './ElementSidebar'
import { Button } from '../ui/button'

export default function ElementCard({ element }: { element: ElementType }) {
  return (
    <Button className='w-full text-left bg-neutral-700 hover:bg-neutral-600'>
      <element.icon />
      {element.label}
    </Button>
    // <div
    //   className={cn(
    //     'border border-dashed rounded-md gap-x-2 p-2  flex items-center',
    //     'cursor-pointer',
    //     'hover:bg-neutral-800 transition-all duration-300',
    //     'text-xs text-wrap text-center'
    //   )}
    // >
    //   {<element.icon />}
    //   <p>{element.label}</p>
    // </div>
  )
}
