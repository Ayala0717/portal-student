import { IconResolver } from '@/components/Icons/Resolver'
import '@/global/styles/animation/main.css'
import { cn } from '@/lib/utils'

interface Props {
  text: string
  textClasses?: string
  wrapperClasses?: string
  requireLoader?: boolean
}

function TextAnimation(props: Props) {
  return (
    <section
      className={cn(
        'min-h-dvh m-auto flex items-center justify-center',
        props.wrapperClasses
      )}
    >
      <p className={cn('text-5xl fadeInOutAnimation', props.textClasses)}>
        {props.text}
      </p>
      {Boolean(props.requireLoader) && (
        <IconResolver
          iconClass='h-5rem w-5rem fadeInOutAnimation'
          iconName='i-line-md:loading-loop'
        />
      )}
    </section>
  )
}

export { TextAnimation }
