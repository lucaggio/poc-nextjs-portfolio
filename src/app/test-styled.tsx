"use client";

import { styled } from "styled-components";

export default function TestStyled() {
  return <Title>Hello world</Title>;
}

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
`;
