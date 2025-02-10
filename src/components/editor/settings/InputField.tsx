import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface InputFieldElementType {
  value: string
  handleChange: (value: string) => void
}
export default function InputField({ value, handleChange }: InputFieldElementType) {
  return (
    <div>
      <div className='text-lg font-bold mb-1'>Content</div>
      <Input
        value={value ?? 'Sex'}
        className={cn(
          `border border-neutral-700 focus:border-0 `,
          'text-primary-foreground bg-neutral-800'
        )}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}
