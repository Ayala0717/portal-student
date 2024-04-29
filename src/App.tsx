import './App.css'
import { useTranslation } from 'react-i18next'
import { Button } from './components/ui/button'

function App() {
  const { t } = useTranslation()

  return (
    <main>
      <section>
        <h1 className='title'>{t('title')}</h1>
        <Button variant='outline'>{t('close')}</Button>
      </section>
    </main>
  )
}

export default App
