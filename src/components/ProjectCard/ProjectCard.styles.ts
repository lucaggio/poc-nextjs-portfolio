import Link from "next/link";
import { styled } from "styled-components";

export const Card = styled(Link)`
  display: block;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;
