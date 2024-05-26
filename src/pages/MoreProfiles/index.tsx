import { useQuery } from 'react-query'

import { getMoreProfiles } from '../../api/getMoreProfiles'
import { BackButton } from '../../components/BackButton'
import { ButtonsContainer } from '../../components/ButtonsContainer/styles'
import { Link } from '../../components/Link'
import { Profile } from '../../components/Profile'
import { ImageSkeleton } from '../../components/Profile/styles'
import { MoreProfilesContainer, ProfilesContainer } from './styles'

export function MoreProfiles() {
  const { data: profiles, isFetching } = useQuery({
    queryKey: ['profiles'],
    queryFn: () => getMoreProfiles(),
    staleTime: Infinity,
  })

  return (
    <MoreProfilesContainer>
      <h1>Mais Perfis</h1>
      <ButtonsContainer>
        <BackButton />
        <Link to="/">Home</Link>
      </ButtonsContainer>

      <ProfilesContainer>
        {isFetching || !profiles
          ? Array.from({ length: 10 }).map((_, index) => (
              <ImageSkeleton key={index} />
            ))
          : profiles.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))}
      </ProfilesContainer>
    </MoreProfilesContainer>
  )
}
