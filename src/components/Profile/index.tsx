import {
  ProfileAbout,
  ProfileContent,
  ProfileFooter,
  ProfileInfo,
  ProfileTitle,
} from './styles'
import imgAvatar from '../../assets/avatar.png'
import Anchor from '../../assets/anchor.svg'
import IconGithub from '../../assets/icon-github.svg'
import IconBuild from '../../assets/icon-build.svg'
import IconFollowers from '../../assets/icon-followers.svg'

export function Profile() {
  return (
    <ProfileContent>
      <img src={imgAvatar} alt="avatar" />
      <ProfileInfo>
        <ProfileTitle>
          <h1>Cameron Williamson</h1>
          <div>
            <span>github</span>
            <a href="#" target="_blank">
              <img src={Anchor} alt="anchor link" />
            </a>
          </div>
        </ProfileTitle>
        <ProfileAbout>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </ProfileAbout>
        <ProfileFooter>
          <div>
            <img src={IconGithub} alt="IconGithub" />
            <p>cameronwll</p>
          </div>
          <div>
            <img src={IconBuild} alt="IconBuild" />
            <p>Rocketseat</p>
          </div>
          <div>
            <img src={IconFollowers} alt="IconFollowers" />
            <p>32 seguidores</p>
          </div>
        </ProfileFooter>
      </ProfileInfo>
    </ProfileContent>
  )
}
