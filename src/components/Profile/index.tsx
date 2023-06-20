import { useEffect, useState } from 'react'

import {
  ProfileAbout,
  ProfileContent,
  ProfileFooter,
  ProfileInfo,
  ProfileTitle,
} from './styles'
import Anchor from '../../assets/anchor.svg'
import IconGithub from '../../assets/icon-github.svg'
import IconBuild from '../../assets/icon-build.svg'
import IconFollowers from '../../assets/icon-followers.svg'
import { api } from '../../lib/axios'

interface IProfile {
  name: string
  bio: string
  login: string
  company: string
  followers: number
  avatar_url: string
  html_url: string
}

export function Profile() {
  const [profile, setProfile] = useState<IProfile>()

  const fetchProfile = async () => {
    const response = await api.get('users/marcoscuomo')
    setProfile(response.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])
  return (
    <ProfileContent>
      <img src={profile?.avatar_url} alt="avatar" className="avatar" />
      <ProfileInfo>
        <ProfileTitle>
          <h1>{profile?.name}</h1>
          <div>
            <span>github</span>
            <a href={profile?.html_url} target="_blank" rel="noreferrer">
              <img src={Anchor} alt="anchor link" />
            </a>
          </div>
        </ProfileTitle>
        <ProfileAbout>
          <p>{profile?.bio}</p>
        </ProfileAbout>
        <ProfileFooter>
          <div>
            <img src={IconGithub} alt="IconGithub" />
            <p>{profile?.login}</p>
          </div>
          <div>
            <img src={IconBuild} alt="IconBuild" />
            <p>{profile?.company}</p>
          </div>
          <div>
            <img src={IconFollowers} alt="IconFollowers" />
            <p>{profile?.followers} seguidores</p>
          </div>
        </ProfileFooter>
      </ProfileInfo>
    </ProfileContent>
  )
}
