import { ComponentProps, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { LinkContainer } from './styles'

interface LinkProps extends ComponentProps<'a'> {}

export function BackButton({ ...props }: LinkProps) {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <LinkContainer onClick={handleNavigate} {...props}>
      Voltar
    </LinkContainer>
  )
}
