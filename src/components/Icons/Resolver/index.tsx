import { cn } from '@/lib/utils'

interface Props {
  iconName: string
  iconClass?: string
}

function IconResolver(props: Props) {
  return (
    <span
      className={cn(
        'inline-block h-1rem w-1rem',
        props.iconClass,
        props.iconName
      )}
      data-inline='false'
    />
  )
}

export { IconResolver }
