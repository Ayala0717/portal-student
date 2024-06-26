import { useTranslation } from 'react-i18next'
import { IconResolver } from '../Icons/Resolver'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { obtainFirsLettersOfWords } from '@/utils/texts'
import { useAppDataStore } from '@/stores'

function Header() {
  const { t } = useTranslation()
  const userInfo = useAppDataStore((state) => state.user)

  return (
    <>
      <header className='flex animate-fade-in animate-duration-1s justify-between px-5 py-3'>
        <div className='flex items-center justify-center gap-5'>
          <IconResolver
            iconClass='w-3rem h-3rem'
            iconName='i-tdesign:logo-qq'
          />
          <p className='text-xl font-bold'>{t('title')}</p>
        </div>
        <div className='flex gap-5'>
          <div>
            <Button size='icon' variant='outline'>
              <IconResolver iconName='i-typcn:plus' />
            </Button>
          </div>
          <div>
            <Avatar>
              <AvatarImage
                alt='User Logo'
                src='https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg?fmt=webp&h=350'
              />
              <AvatarFallback>
                {obtainFirsLettersOfWords(String(userInfo?.username))}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <hr className='min-w-dvw' />
    </>
  )
}

export { Header }
