// Custom components
import Header from '@/components/custom/Header'
import Hero from '@/components/custom/Hero'

import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

async function getUser() {
  const session = await getServerSession()
  return session
}

export default async function Home() {
  const session = await getUser()

  if (session?.user) {
    redirect('/designs')
  }

  return (
    <div>
      <Hero />
    </div>
  )
}
