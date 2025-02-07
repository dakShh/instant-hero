import { cn } from '@/lib/utils'
import { LayoutType } from './ElementSidebar'

export default function LayoutCard({ layout }: { layout: LayoutType }) {
  return (
    <div
      className={cn(
        'border border-dashed rounded-md py-4 flex flex-col items-center justify-center',
        'cursor-pointer',
        'hover:bg-neutral-800 transition-all duration-300'
      )}
    >
      {<layout.icon />}
      <p>{layout.label}</p>
    </div>
  )
}
