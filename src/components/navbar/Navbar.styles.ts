import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.background};
  padding: 1.25rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 0.5em;
`;

export const Logo = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Menu = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.text};
  border-bottom: 2px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary : "transparent")};
  padding-bottom: 0.25rem;
  transition: color 0.2s ease, border-bottom 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
