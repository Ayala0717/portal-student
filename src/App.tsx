import { useNavigate, useRoutes } from 'react-router'
import { Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ErrorPage from './views/error-page'
import { Toaster } from './components/ui/toaster'
import { routes } from '@/routes/index'
import { useAppDataStore } from '@/stores'
import ErrorBoundary from '@/components/ErrorBoundary'

function App() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const isAuth = useAppDataStore((state) => state.isAuthenticated)

  useEffect(() => {
    if (!isAuth) navigate('/login', { replace: true })
    if (
      isAuth &&
      (window.location.pathname === '/' ||
        window.location.pathname === '/login')
    )
      navigate('/home')
  }, [isAuth])

  const route = useRoutes(routes)
  return (
    <ErrorBoundary fallBack={<ErrorPage />}>
      <Suspense fallback={<p>{t('loading')}</p>}>
        <main>{route}</main>
        <Toaster />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
