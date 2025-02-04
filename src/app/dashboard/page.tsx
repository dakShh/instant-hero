'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  const { data: session, status } = useSession()

  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/') // Redirect if not logged in
    }
  }, [status, router])

  if (status === 'loading') return <p>Loading...</p>

  return (
    <div>
      welcome! {session?.user?.name ?? 'Guest'}
      <div>
        <Button onClick={() => signOut()}>Logout</Button>
      </div>
    </div>
  )
}
