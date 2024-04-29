import { useTranslation } from 'react-i18next'
import './App.css'

function App() {
  const { t } = useTranslation()

  return (
    <main>
      <section>
        <h1 className='title'>{t('title')}</h1>
      </section>
    </main>
  )
}

export default App
