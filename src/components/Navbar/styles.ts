import styled from "styled-components";

interface Props {
  darkTheme: boolean;
}

export const Navbar = styled.div<Props>`
  background-color: ${({ theme, darkTheme }) => darkTheme ? theme.colors.gray[70] : theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  height: 65px;
  margin-left: 65px;
`;

export const NavbarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  position: relative;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

export const UserName = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[40]};
`;

export const ButtonTheme = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray[40]};
`;

export const UserMenu = styled.div`
  position: absolute;
  top: 130%;
  right: 0px;
  background: ${({ theme }) => theme.colors.white};
  width: 110px;
  box-shadow: 0 5px 6px rgba(0,0,0,0.1);
  border-radius: 0 0 4px 4px;
`;

export const UserLogout = styled.li`
  cursor: pointer;
  padding: 1rem;
  list-style: none;
`;
