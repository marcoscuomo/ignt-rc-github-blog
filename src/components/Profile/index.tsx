import { ProfileContent, ProfileInfo, ProfileTitle } from './styles'
import imgAvatar from '../../assets/avatar.png'

export function Profile() {
  return (
    <ProfileContent>
      <img src={imgAvatar} alt="avatar" />
      <ProfileInfo>
        <ProfileTitle>
          <h1>Cameron Williamson</h1>
          <span>github</span>
        </ProfileTitle>
      </ProfileInfo>
    </ProfileContent>
  )
}
