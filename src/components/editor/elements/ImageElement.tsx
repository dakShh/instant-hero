import Image from 'next/image'

export default function ImageElement() {
  return (
    <div className='w-full h-[350px] relative overflow-hidden'>
      <Image src={'/assets/placeholder-image.jpg'} alt='asd' layout='fill' objectFit='cover' />
    </div>
  )
}
