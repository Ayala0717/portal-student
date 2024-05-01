import { useTranslation } from 'react-i18next'

function Login() {
  const { t } = useTranslation()

  return (
    <section className='min-h-dvh'>
      <div className='flex'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl font-bold'>{t('loginPage.title')}</h1>
          <p className='text-lg fw-400 op-30'>{t('loginPage.description')}</p>
        </div>
      </div>
    </section>
  )
}

export default Login
