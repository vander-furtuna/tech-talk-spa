import { ComponentProps, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { LinkContainer } from './styles'

interface LinkProps extends ComponentProps<'a'> {
  to: string
}

export function Link({ children, to, ...props }: LinkProps) {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => {
    navigate(to)
  }, [navigate, to])

  return (
    <LinkContainer onClick={handleNavigate} {...props}>
      {children}
    </LinkContainer>
  )
}
