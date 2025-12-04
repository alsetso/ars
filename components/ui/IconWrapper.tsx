import * as Icons from 'lucide-react'
import { LucideProps } from 'lucide-react'

type IconName = keyof typeof Icons

interface IconWrapperProps extends Omit<LucideProps, 'ref'> {
  name: IconName
}

export function IconWrapper({ name, ...props }: IconWrapperProps) {
  const Icon = Icons[name] as React.ComponentType<LucideProps>
  
  if (!Icon) {
    return null
  }

  return <Icon {...props} />
}



