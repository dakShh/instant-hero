'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { cn } from '@/lib/utils'
import Header from '@/components/custom/Header'

import { Plus } from 'lucide-react'
import Footer from '@/components/custom/Footer'
import Link from 'next/link'

export default function Dashboard() {
  const { status } = useSession()

  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/') // Redirect if not logged in
    }
  }, [status, router])

  if (status === 'loading')
    return (
      <p className={cn('h-screen w-screen grid place-items-center')}>
        Loading...
      </p>
    )

  return (
    <div className={cn('overflow-hidden relative')}>
      <Header />
      {/* Gradients */}
      <div
        aria-hidden='true'
        className='absolute -top-[27rem] start-1/2 flex -translate-x-1/2 transform'
      >
        <div className='h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-background/50 to-background blur-3xl' />
        <div className='h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 rounded-full bg-gradient-to-tl from-primary/20 via-primary/90 to-primary/20 blur-3xl' />
      </div>
      {/* End Gradients */}
      <div
        className={cn(
          'z-50 relative min-h-[55vh]',
          'container max-w-6xl mx-auto',
          'px-10 my-20'
        )}
      >
        <div className={cn('text-3xl font-extrabold')}>Designs</div>

        {/* TODO: make this into a card */}
        <div className='mt-5'>
          <Link href={'/editor/123'}>
            <div
              className={cn(
                'bg-white/20 w-[320px] h-[150px] rounded-md grid place-items-center',
                'cursor-pointer hover:bg-white/40 duration-700'
              )}
            >
              <Plus className='text-neutral-900' />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
