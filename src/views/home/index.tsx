import '@/global/styles/home/main.css'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { TextAnimation } from '@/components/Text/Animation'
import { useAppDataStore } from '@/stores'
import { Header } from '@/components/Header'

function Home() {
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation()
  const userInfo = useAppDataStore((state) => state.user)

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
          text={t('homePage.welcomeText', {
            username: userInfo?.username || 'Lore Impsum'
          })}
          wrapperClasses='flex-col gap-5'
        />
      )) || <Header />}
    </main>
  )
}

export default Home
