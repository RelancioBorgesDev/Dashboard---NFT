import React from 'react'
import {HeaderLayout, BellIcon, SearchIcon, InputBox, ProfileBox, ProfileImageBox, DropDownIcon} from './style'
export default function Header() {
  return (
    <HeaderLayout>
      <InputBox>
        <input type="text" placeholder="Search for NFT's ....." />
        <SearchIcon/>
      </InputBox>
      <ProfileBox>
        <a href="">Sell Your ArtWork</a>
        <ProfileImageBox>
          <div></div>
          <span>Relancio Borges</span>
          <DropDownIcon/>
        </ProfileImageBox>
        <BellIcon/>
      </ProfileBox>
    </HeaderLayout>
  )
}
