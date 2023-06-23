import { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import * as S from './styles';
import Search from "../Search";
import Avatar from '../../assets/images/avatar.png'
import { useStore } from "../../store";

const Navbar = () => {
  const darkTheme = useStore((state) => state.darkTheme);
  const [openMenu, setOpenMenu] = useState(false)
  const { setDarkTheme, logout } = useStore();

  const handleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <S.Navbar className="my-7" darkTheme={darkTheme}>
      <Search />
      <S.NavbarSection>
        <S.ButtonTheme onClick={handleTheme}>
          <WiMoonAltThirdQuarter size={28} />
        </S.ButtonTheme>
        <S.User onClick={() => setOpenMenu(!openMenu)}>
          <S.UserAvatar src={Avatar} alt="avatar" />
          <S.UserName>Jonh Doe</S.UserName>
          <BiChevronDown size={24} />
          {openMenu && (
            <S.UserMenu onClick={() => logout()}>
              <S.UserLogout>Salir</S.UserLogout>
            </S.UserMenu>
          )}
        </S.User>
      </S.NavbarSection>
    </S.Navbar>
  );
}

export default Navbar;
