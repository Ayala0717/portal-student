import './App.css'
import { useTranslation } from 'react-i18next'
import { Button } from './components/ui/button'

function App() {
  const { t } = useTranslation()

  return (
    <main>
      <section>
        <h1 className='title hover:(bg-gray-500 font-medium)'>{t('title')}</h1>
        <Button>{t('close')}</Button>
      </section>
    </main>
  )
}

export default App
