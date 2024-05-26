import styled from 'styled-components'

export const LinkContainer = styled.a`
  padding: 0.5rem 0.75rem;
  font-weight: bold;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  height: fit-content;
  flex-shrink: 0;

  color: white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`
