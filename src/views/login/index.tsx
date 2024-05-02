import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { FormBox } from '@/components/Box/Form'
import { UserModel } from '@/types/models/user'
import { FormFieldsModel } from '@/types/components/form'
import { IconResolver } from '@/components/Icons/Resolver'
import { useToast } from '@/components/ui/use-toast'
import { useAppDataStore } from '@/stores'

function Login() {
  const { toast } = useToast()
  const { t } = useTranslation()
  const setAuthState = useAppDataStore((state) => state.setAuthState)

  const formSchema = z.object({
    username: z
      .string()
      .min(1, { message: t('validations.minLength', { count: 1 }) })
      .trim(),
    password: z
      .string()
      .min(1, { message: t('validations.minLength', { count: 1 }) })
      .trim()
  })

  const formField: FormFieldsModel<UserModel>[] = [
    {
      fieldName: 'username',
      label: t('loginPage.userName')
    },
    {
      fieldName: 'password',
      label: t('loginPage.password')
    }
  ]

  const defaultValues: UserModel = {
    username: '',
    password: ''
  }

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: 'Showing your data',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })

    setAuthState(true, data)
  }

  return (
    <section className='min-h-dvh'>
      <div className='w-full flex'>
        <div className='flex basis-full flex-col items-center justify-center gap-4 border-none outline-[5rem] outline-black outline-solid min-h-dvh md:(min-h-inherit basis-50% border-rd-r-[5%])'>
          <h1 className='text-5xl font-bold'>{t('loginPage.title')}</h1>
          <p className='text-lg fw-400 op-30'>{t('loginPage.description')}</p>
          <FormBox
            requireSubmit
            defaultValues={defaultValues}
            formField={formField}
            formSchema={formSchema}
            onSubmit={handleSubmit}
          />
        </div>
        <div className='hidden bg-black text-white min-h-dvh md:(flex basis-50% flex-col)'>
          <div className='flex items-center justify-end gap-3 p-8'>
            <p className='text-xl font-bold'>{'Acme Inc'}</p>
            <IconResolver
              iconClass='w-3rem h-3rem'
              iconName='i-tdesign:logo-qq'
            />
          </div>
          <div className='mt-auto'>
            <p className='p-5 text-lg font-bold op-50'>
              {
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, delectus sint vitae veritatis fuga, natus tenetur mollitia possimus omnis enim laudantium distinctio reiciendis necessitatibus minus soluta at, inventore quibusdam qui.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
