import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

function NotFound() {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col items-center justify-center h-dvh space-y-5'>
      <h1 className='text-4xl font-bold'>{t('notFoundPage.title')}</h1>
      <hr className='w-full' />
      <p className='text-lg'>{t('notFoundPage.description')}</p>
      <Link replace to='/home'>
        <Button>{t('notFoundPage.backToHome')}</Button>
      </Link>
    </div>
  )
}

export default NotFound
