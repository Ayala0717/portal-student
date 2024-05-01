import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

const ErrorPage = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <div
      className={cn('flex min-h-screen items-center justify-center', className)}
    >
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>{t('errorPage.title')}</h1>
        <p className='mt-4'>{t('errorPage.description')}</p>
      </div>
    </div>
  )
}

export default ErrorPage
