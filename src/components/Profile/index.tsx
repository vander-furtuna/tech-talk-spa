import { OtherProfileType } from '../../api/getMoreProfiles'
import { MyProfileType } from '../../api/getProfile'
import { Image, ProfileContainer } from './styles'

interface ProfileProps {
  profile: MyProfileType | OtherProfileType
}

export function Profile({ profile }: ProfileProps) {
  return (
    <ProfileContainer>
      <Image src={profile.avatar_url} alt="Foto de Perfil" />
      <strong>{profile.login}</strong>
    </ProfileContainer>
  )
}
