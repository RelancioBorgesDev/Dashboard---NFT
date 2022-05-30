import styled from "styled-components";
import {Bell, Search, ArrowDropDown} from '../../styles/Icons'

export const HeaderLayout = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 5rem;

`

export const InputBox = styled.div`
  width: 40%;
  position: relative;
  > input{
    width: 100%;
    position: relative;
    background-color: #2c2e4a;
    padding: 1rem;
    border-radius: .75rem;
    font-size: 1.2rem;
    color: #fff;
    outline: 0;
  }

`
export const SearchIcon = styled(Search)`
  position: absolute;
  width: 30px;
  height: 30px;
  color: #6b6e91;
  bottom: 0;
  top: 15px;
  right: 10px;
`

export const BellIcon = styled(Bell)`
  width: 20px;
  height: 20px;
  color: #fff;
`

export const ProfileBox = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  gap: 0.2rem;
  color: #fff;
  > a {
    font-size: 1.2rem;
    font-weight: lighter;
    color: #fff;
  }
`

export const ProfileImageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;

  > div{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid #7c6e9e;
    border-radius: 50%;
  }
`

export const DropDownIcon = styled(ArrowDropDown)`
  width: 20px;
  height: 20px;
  color: #fff;
`