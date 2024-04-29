import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation()

  return (
    <>
      <div>
        <a href='https://vitejs.dev' rel='noreferrer' target='_blank'>
          <img alt='Vite logo test' className='logo' src={viteLogo} />
        </a>
        <a href='https://react.dev' rel='noreferrer' target='_blank'>
          <img alt='React logo' className='logo react' src={reactLogo} />
        </a>
        {t('title')}
      </div>
      <h1>{'Vite + React'}</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          {`count is ${count}`}
        </button>
        <p>{`Edit ${(<code>{'src/App.tsx'}</code>)} and save to test HMR`}</p>
      </div>
      <p className='read-the-docs'>
        {'Click on the Vite and React logos to learn more'}
      </p>
    </>
  )
}

export default App
