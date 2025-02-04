// Utils
import { cn } from '@/lib/utils'

// Icons
import { Monitor, Rocket, Smartphone } from 'lucide-react'

// Components
import { Button } from '../ui/button'
import Link from 'next/link'

export default function EditorHeader() {
  return (
    <div
      className={cn(
        'py-3 border-b border-white/20 shadow-2xl',
        'grid grid-cols-5',
        ''
      )}
    >
      <div
        className={cn(
          'font-extrabold text-xl',
          'flex items-center gap-x-2',
          'px-10'
        )}
      >
        <Rocket />
        Instant Hero
      </div>
      <div className={cn('col-span-3', 'flex gap-x-2  justify-center')}>
        <span className='cursor-pointer flex text-xs gap-x-1 bg-white/10 hover:bg-white/20 duration-500 p-3 rounded-md'>
          <Monitor className='' size={'18'} /> Desktop
        </span>
        <span className='cursor-pointer flex items-center text-xs gap-x-1 bg-white/10 hover:bg-white/20 duration-500 p-3 rounded-md'>
          <Smartphone className='' size={'18'} /> Mobile
        </span>
      </div>
      <div className='gap-x-2 flex items-center'>
        <Link href='/'>
          <Button variant={'outline'}>Back</Button>
        </Link>
        <Button>Save Design</Button>
      </div>
    </div>
  )
}
