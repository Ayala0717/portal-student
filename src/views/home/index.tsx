import '@/global/styles/home/main.css'
import '@/global/styles/components/menu.css'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { TextAnimation } from '@/components/Text/Animation'
import { useAppDataStore } from '@/stores'
import { Header } from '@/components/Header'
import { IconResolver } from '@/components/Icons/Resolver'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

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
        <>
          <Header />
          <div className='transition-all main-section'>
            {/* Start of side menu */}
            <div className='hidden border-r bg-muted/40 md:block'>
              <div className='h-full max-h-screen flex flex-col gap2'>
                <div className='flex-1'>
                  <nav className='grid items-start px-2 text-sm font-medium lg:p-4'>
                    <div className='side-menu-item'>
                      <IconResolver
                        iconClass='w-2rem h-2rem'
                        iconName='i-iconamoon:home-bold'
                      />
                      <span>{t('sideMenu.home')}</span>
                    </div>
                    <div className='side-menu-item'>
                      <IconResolver
                        iconClass='w-2rem h-2rem '
                        iconName='i-gravity-ui:calendar'
                      />
                      <span>{t('sideMenu.calendar')}</span>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            {/* End of side menu */}
            {/* Start of mobile menu */}
            <div className='flex flex-col'>
              <header className='block h-14 flex items-center gap-4 border-b bg-muted/40 px-4 lg:(hidden h-[60px] px-6)'>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      className='shrink-0 md:hidden'
                      size='icon'
                      variant='outline'
                    >
                      <IconResolver
                        iconClass='h-2rem w-2rem'
                        iconName='i-gravity-ui-bars'
                      />
                      <span className='sr-only'>
                        {t('sideMenu.toggleMenu')}
                      </span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent className='flex flex-col' side='left'>
                    <nav>
                      <div className='side-menu-item__mobile'>
                        <IconResolver
                          iconClass='w-2rem h-2rem'
                          iconName='i-iconamoon:home-bold'
                        />
                        <span>{t('sideMenu.home')}</span>
                      </div>
                      <div className='side-menu-item__mobile'>
                        <IconResolver
                          iconClass='w-2rem h-2rem '
                          iconName='i-gravity-ui:calendar'
                        />
                        <span>{t('sideMenu.calendar')}</span>
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>
              </header>
              {/* End of mobile menu */}
              <section className='flex flex-1 flex-col gap-4 p-4 lg:(gap-6 p-6)'>
                <div className='flex items-center'>
                  <h1 className='text-lg font-semibold md:text-2xl'>
                    {'Inventory'}
                  </h1>
                </div>
                <div className='flex flex-1 items-center justify-center border rounded-lg border-dashed shadow-sm'>
                  <div className='flex flex-col items-center gap-1 text-center'>
                    <h3 className='text-2xl font-bold tracking-tight'>
                      {'You have no products'}
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      {'You can start selling as soon as you add a product.'}
                    </p>
                    <Button className='mt-4'>{'Add Product'}</Button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Home
