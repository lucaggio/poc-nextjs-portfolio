import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
  line-height: 1.6;
`;

export const Avatar = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  display: block;
  margin: 0 auto 1.5rem auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.9;
  }
`;

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
  padding: 0;
  list-style: none;
`;

export const Skill = styled.li`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }
`;
