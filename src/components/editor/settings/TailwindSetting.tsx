import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

interface TailwindSettingType {
  value: string
  handleChange: (value: string) => void
}
export default function TailwindSetting({ value, handleChange }: TailwindSettingType) {
  return (
    <div className='mb-2'>
      <div className='text-md font-bold mb-1'>Tailwind CSS</div>
      <Textarea
        value={value ?? 'Sex'}
        className={cn(
          `border border-neutral-700 focus:outline-none focus-visible:ring-0`,
          'text-primary-foreground bg-neutral-800'
        )}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}
