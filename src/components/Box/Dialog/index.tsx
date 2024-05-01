import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter
} from '@/components/ui/dialog'

import { DialogProps } from '@/types/components/dialog'

function DialogBox({
  trigger,
  title,
  description,
  children,
  acceptButton,
  closeButton,
  requireFooter = true,
  requireAcceptButton = true,
  requireCloseButton = true
}: DialogProps) {
  const { t } = useTranslation()

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button type='button'>{t('open')}</Button>}
      </DialogTrigger>
      <DialogContent className='w-full'>
        <DialogHeader>
          {Boolean(title) && <DialogTitle>{title}</DialogTitle>}
          {Boolean(description) && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>
        {children}
        {Boolean(requireFooter) && (
          <DialogFooter>
            {Boolean(requireCloseButton) && (
              <DialogClose asChild>
                {closeButton || (
                  <Button type='button' variant='secondary'>
                    {t('close')}
                  </Button>
                )}
              </DialogClose>
            )}
            {Boolean(requireAcceptButton) &&
              (acceptButton || <Button type='button'>{t('accept')}</Button>)}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

export { DialogBox }
