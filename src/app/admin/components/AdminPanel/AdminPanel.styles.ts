import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
`;

export const Description = styled.p`
  margin-bottom: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Button = styled.button<{ $bg?: string }>`
  background-color: ${({ $bg, theme }) => $bg || theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const ErrorMsg = styled.span`
  color: #dc143c;
  font-size: 0.85rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  padding: 1rem;
  margin-bottom: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;
