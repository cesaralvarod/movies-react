import { ChangeEvent, MouseEvent, useState } from 'react'

export function useForm<T>(initialState: T, onSubmit?: (arg: T) => void) {
  const [formData, setFormData] = useState<T>(initialState)

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.value?.startsWith(' ')) target.value = target.value.trim()

    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSubmit = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!onSubmit) return

    onSubmit(formData)
  }

  return { formData, handleInputChange, handleSubmit }
}
