import styled from "styled-components";

interface Props {
  darkTheme: boolean;
}

export const Sidebar = styled.div<Props>`
  background-color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.gray[70] : theme.colors.white};
  width: 65px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const SidebarBrand = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarLogo = styled.img`
  width: 30px;
  height: 30px;
`;

export const SidebarMenu = styled.div`
  margin-top: 2rem;
`;

export const SidebarMenuLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary[10]};
  height: 45px;
`;


