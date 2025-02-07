import { cn } from '@/lib/utils'
import { LayoutType } from './ElementSidebar'

export default function LayoutCard({ layout }: { layout: LayoutType }) {
  return (
    <>
      <div
        className={cn(
          'border border-dashed rounded-md gap-y-2 py-4 flex flex-col items-center justify-center',
          'cursor-pointer',
          'hover:bg-neutral-800 transition-all duration-300',
          'text-sm text-wrap text-center'
        )}
      >
        {<layout.icon />}
        <p className=''>{layout.label}</p>
      </div>
    </>
  )
}
