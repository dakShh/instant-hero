import { cn } from '@/lib/utils'
import { ElementType } from '../ElementSidebar'
import { useScreenSize } from '@/providers'

export default function Columns({ element }: { element: ElementType }) {
  const { screenSize } = useScreenSize()
  return (
    <div
      className={cn(
        `grid grid-cols-1  gap-2`,
        `${screenSize == 'desktop' && `grid-cols-${element.numOfColumn}`}`,
        `${screenSize == 'mobile' && `grid-cols-1`}`
      )}
    >
      {Array.from({ length: element.numOfColumn }).map((_, index) => (
        <div key={index} className='bg-neutral-300 p-3 text-xs'>
          {element.label}
        </div>
      ))}
    </div>
  )
}
