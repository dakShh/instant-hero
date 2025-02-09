import Header from '@/components/custom/Header'

export default function Test() {
  return (
    <div className='container mx-auto'>
      <Header />
      <div className='max-w-7xl mx-auto false bg-white w-full p-4 text-secondary-foreground'>
        <div className='invisible grid-cols-3'></div>
        <div className='grid w-full'>
          <div className='grid grid-cols-3 false w-full'>
            <div className='border border-neutral-400 border-dashed bg-neutral-200 false w-full'>
              <div className='py-2 text-center text-sm'>Drag Elements Here</div>
            </div>
            <div className='border border-neutral-400 border-dashed bg-neutral-200 false w-full'>
              <div className='py-2 text-center text-sm'>Drag Elements Here</div>
            </div>
            <div className='false bg-green-100 w-full'>
              <div className='w-full'>
                <div className='w-full'>
                  <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full'>
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid w-full'>
          <div className='grid grid-cols-2 false w-full'>
            <div className='false false w-full'>
              <div className='w-full'>
                <div className='w-full'>
                  <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full'>
                    Button
                  </button>
                </div>
              </div>
            </div>
            <div className='false false w-full'>
              <div className='w-full'>
                <div className='w-full'>
                  <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full'>
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid w-full'>
          <div className='grid grid-cols-1 false w-full'>
            <div className='border border-neutral-400 border-dashed bg-neutral-200 false w-full'>
              <div className='py-2 text-center text-sm'>Drag Elements Here</div>
            </div>
          </div>
        </div>
        <div className='grid w-full'>
          <div className='grid grid-cols-3 false w-full'>
            <div className='false bg-green-100 w-full'>
              <div className='w-full'>
                <div className='w-full'>
                  <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full'>
                    Button
                  </button>
                </div>
              </div>
            </div>
            <div className='false false w-full'>
              <div className='w-full'>
                <div className='w-full'>
                  <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full'>
                    Button
                  </button>
                </div>
              </div>
            </div>
            <div className='border border-neutral-400 border-dashed bg-neutral-200 false w-full'>
              <div className='py-2 text-center text-sm'>Drag Elements Here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
