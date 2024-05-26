import styled from 'styled-components'

export const MoreProfilesContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
  width: 100%;
  gap: 1rem;
  padding: 2rem 4rem;
`

export const ProfilesContainer = styled.article`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem 0;
  justify-items: center;
  width: 100%;
`
