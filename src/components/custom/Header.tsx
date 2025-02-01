import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

// Icons
import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <div
      className={cn(
        'font-extrabold text-xl',
        'max-w-5xl mx-auto',
        'z-40 relative bg-primary-foreground backdrop-filter bg-opacity-80',
        'mt-2 px-8 py-4 rounded-full',
        'flex justify-between'
      )}
    >
      <div className='flex gap-x-2'>
        <Rocket />
        Instant Hero
      </div>
      <Button>Get started</Button>
    </div>
  )
}
