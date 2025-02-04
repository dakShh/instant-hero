'use client'
// Core
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// Utility
import { cn } from '@/lib/utils'
import EditorHeader from '@/components/editor/editorHeader'
import Footer from '@/components/custom/Footer'

// Components
import ElementSidebar from '@/components/editor/ElementSidebar'

export default function Editor() {
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
    <div className={cn('container mx-auto', 'relative ')}>
      <EditorHeader />
      <div className={cn('grid grid-cols-5', 'h-[90vh]')}>
        <ElementSidebar />
        <div className={cn('col-span-3', 'bg-neutral-600')}>editor</div>
        <div>Settings</div>
      </div>
      <Footer />
    </div>
  )
}
