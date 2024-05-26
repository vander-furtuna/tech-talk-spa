import styled from 'styled-components'

export const LinkContainer = styled.a`
  padding: 0.5rem 0.75rem;
  font-weight: bold;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: black;
  height: fit-content;
  flex-shrink: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(90deg, white, rgba(255, 255, 255, 0.7));
    width: 200%;
    height: 100%;
    z-index: -1;
    transition: all 0.5s ease;
  }

  &:hover {
    &:before {
      right: -100%;
    }
  }
`
