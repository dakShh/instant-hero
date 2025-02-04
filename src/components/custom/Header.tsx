'use client'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

// Icons
import { Rocket, LogOut } from 'lucide-react'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function Header() {
  const { data: session } = useSession()

  return (
    <div
      className={cn(
        'max-w-5xl mx-auto',
        'z-40 relative bg-primary-foreground backdrop-filter bg-opacity-80',
        'mt-2 px-8 py-4 rounded-full',
        'flex justify-between'
      )}
    >
      <div className={cn('font-extrabold text-xl', 'flex gap-x-2')}>
        <Rocket />
        Instant Hero
      </div>
      <div>
        {session?.user ? (
          <div className={cn('flex items-center gap-x-4', 'font-extralight text-sm', 'relative z-50')}>
            <div className='opacity-75'>{session?.user?.name}</div>
            <Button
              onClick={() => {
                signOut()
              }}
              size={'icon'}
            >
              <LogOut />
            </Button>
          </div>
        ) : (
          <Button onClick={() => signIn('google')}>Get started</Button>
        )}
      </div>
    </div>
  )
}
