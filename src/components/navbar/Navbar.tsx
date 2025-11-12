"use client";

import { usePathname } from "next/navigation";
import * as S from "./Navbar.styles";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <S.Nav>
      <S.Logo>POC PORTFOLIO</S.Logo>
      <S.Menu>
        <S.NavLink href="/" $active={pathname === "/"}>
          Home
        </S.NavLink>
        <S.NavLink href="/about" $active={pathname === "/about"}>
          About
        </S.NavLink>
        <S.NavLink href="/admin" $active={pathname === "/admin"}>
          Admin
        </S.NavLink>
      </S.Menu>
    </S.Nav>
  );
}
