import { MdDashboardCustomize } from "react-icons/md";
import * as S from "./styles";
import Logo from "../../assets/images/logo.png";
import { useStore } from "../../store";

const Sidebar = () => {
  const darkTheme = useStore((state) => state.darkTheme);
  return (
    <S.Sidebar darkTheme={darkTheme}>
      <S.SidebarBrand>
        <S.SidebarLogo src={Logo} alt="logo" />
      </S.SidebarBrand>
      <S.SidebarMenu>
        <S.SidebarMenuLink>
          <MdDashboardCustomize size={24} />
        </S.SidebarMenuLink>
      </S.SidebarMenu>
    </S.Sidebar>
  );
};

export default Sidebar;
