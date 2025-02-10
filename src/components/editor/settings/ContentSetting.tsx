import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface ContentSettingType {
  value: string
  handleChange: (value: string) => void
}
export default function ContentSetting({ value, handleChange }: ContentSettingType) {
  return (
    <div className='mb-5'>
      <div className='text-md font-bold mb-1'>Content</div>
      <Input
        value={value ?? 'Sex'}
        className={cn(`border border-neutral-700`, 'text-primary-foreground bg-neutral-800')}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}
