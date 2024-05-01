import '@/global/styles/home/main.css'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { TextAnimation } from '@/components/Text/Animation'
import { Button } from '@/components/ui/button'

function Home() {
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation()

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearInterval(timeOutId)
  }, [])

  return (
    <main>
      {(Boolean(loading) && (
        <TextAnimation
          requireLoader
          text={'Hola Lorem ipsum'}
          wrapperClasses='flex-col gap-5'
        />
      )) || (
        <section className='animate-fade-in animate-duration-1s'>
          <h1 className='hover:(bg-gray-500 font-medium) title'>
            {t('title')}
          </h1>
          <Button>{t('close')}</Button>
        </section>
      )}
    </main>
  )
}

export default Home
