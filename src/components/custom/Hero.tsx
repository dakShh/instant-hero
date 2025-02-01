import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import Header from './Header'

export default function Hero() {
  return (
    <div className='relative overflow-hidden'>
      <Header />
      {/* Gradients */}
      <div aria-hidden='true' className='absolute -top-[27rem] start-1/2 flex -translate-x-1/2 transform'>
        <div className='h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-background/50 to-background blur-3xl' />
        <div className='h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 rounded-full bg-gradient-to-tl from-primary/20 via-primary/90 to-primary/20 blur-3xl' />
      </div>
      {/* End Gradients */}
      <div className='relative z-10  py-24 lg:py-16'>
        <div className='container py-10 lg:py-16'>
          <div className='mx-auto max-w-2xl text-center'>
            <p className=''>Elevate your first impression</p>
            {/* Title */}
            <div className='mt-5 max-w-2xl'>
              <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                Instantly transform your site’s first impression.
              </h1>
            </div>
            {/* End Title */}
            <div className='mt-5 max-w-3xl'>
              <p className='text-xl text-primary-foreground/40'>
                Over 10+ fully responsive, UI blocks you can drop into your Shadcn UI projects and customize to your
                heart&apos;s content.
              </p>
            </div>
            {/* Buttons */}
            <div className='mt-8 flex justify-center gap-3'>
              <Button size={'lg'}>Get started</Button>
              <Button size={'lg'} variant={'outline'}>
                Learn more
              </Button>
            </div>
            {/* End Buttons */}
          </div>
        </div>
      </div>
    </div>
  )
  {
    /* End Hero */
  }
}
