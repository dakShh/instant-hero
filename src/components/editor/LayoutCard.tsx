import { cn } from '@/lib/utils'
import { LayoutType } from './ElementSidebar'
import { Button } from '../ui/button'

export default function LayoutCard({ layout }: { layout: LayoutType }) {
  return (
    <div
      className={cn(
        'w-full bg-primary ',
        'text-sm',
        'cursor-pointer',
        'flex gap-x-2 px-4 py-2 rounded-md items-center transition-color duration-300'
      )}
    >
      <layout.icon />
      {layout.label}
    </div>
    //   <Button className='w-full text-left bg-neutral-700 hover:bg-neutral-600'>
    //   <layout.icon />
    //   {layout.label}
    // </Button>
  )
}
