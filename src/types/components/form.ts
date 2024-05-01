import { type ZodType } from 'zod'

export interface FormProps<T> {
  formSchema: ZodType
  formField: FormFieldsModel<T>[]
  formWrapperClasses?: string
  submitText?: string
  requireSubmit?: boolean
  submitWrapperClasses?: string
  defaultValues: T
  labelText?: string
  requireCheck?: boolean
  disabledButton?: boolean
  onSubmit: <S>(values: S) => Promise<void>
  onLabelChecked?: (check: boolean) => void
}

export interface FormFieldsModel<T> {
  fieldName: keyof T
  label?: string
  formItemClasses?: string
  componentProps?: ComponentProp
}

interface ComponentProp {
  [k: string]: unknown
}
