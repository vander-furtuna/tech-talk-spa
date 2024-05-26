import { useEffect, useState } from 'react'

import { getProfile, MyProfileType } from '../../api/getProfile'
import { BackButton } from '../../components/BackButton'
import { ButtonsContainer } from '../../components/ButtonsContainer/styles'
import { Link } from '../../components/Link'
import { Profile } from '../../components/Profile'
import { ImageSkeleton } from '../../components/Profile/styles'
import { MyProfileContainer } from './styles'

export function MyProfile() {
  const [profile, setProfile] = useState<MyProfileType | null>(null)

  const [isFetching, setIsFetching] = useState(true)

  async function fetchProfile() {
    try {
      setIsFetching(true)
      const data = await getProfile()

      setProfile(data)
    } catch (error) {
      console.error('Error fetching profile:', error)
    } finally {
      setIsFetching(false)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <MyProfileContainer>
      <h1>Meu Pefil</h1>
      {isFetching || !profile ? (
        <ImageSkeleton />
      ) : (
        <Profile profile={profile} />
      )}
      <ButtonsContainer>
        <BackButton />
        <Link to="/all">Mais Perfis</Link>
      </ButtonsContainer>
    </MyProfileContainer>
  )
}
