import '@/global/styles/home/main.css'
import '@/global/styles/components/menu.css'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { TextAnimation } from '@/components/Text/Animation'
import { useAppDataStore } from '@/stores'
import { Header } from '@/components/Header'
import { IconResolver } from '@/components/Icons/Resolver'

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
    <div>
      {(Boolean(loading) && (
        <TextAnimation
          requireLoader
          text={t('homePage.welcomeText', {
            username: userInfo?.username || 'Lore Impsum'
          })}
          wrapperClasses='flex-col gap-5'
        />
      )) || (
        <header className='animate-fade-in animate-duration-1s'>
          <Header />
          <nav className='max-w-content right-border'>
            <ul>
              <li>
                <div className='flex-center gap-2 rounded-r-full bg-gray-500/50 p-2 pl-5'>
                  <IconResolver
                    iconClass='w-2rem h-2rem '
                    iconName='i-ph:house-bold'
                  />
                  <span className='font-bold'>{'Lorem ipsum dolor'}</span>
                </div>
              </li>
              <li>
                <div className='flex-center gap-2 rounded-r-full p-2'>
                  <IconResolver
                    iconClass='w-2rem h-2rem '
                    iconName='i-material-symbols:calendar-today-outline-rounded'
                  />
                  <span className='font-bold'>{'Lorem ipsum dolor'}</span>
                </div>
              </li>
            </ul>
          </nav>
          {/* <section>
            {
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat atque quidem quasi minima voluptatum ratione quam iure vel voluptatem impedit soluta totam  , ipsa, eveniet perferendis culpa ex dignissimos'
            }
          </section> */}
        </header>
      )}
    </div>
  )
}

export default Home
