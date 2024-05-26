import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  width: fit-content;
  height: fit-content;
`
export const Image = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
`

export const ImageSkeleton = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-image: linear-gradient(45deg, white, rgba(255, 255, 255, 0.4));
  background-size: 100%;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`
