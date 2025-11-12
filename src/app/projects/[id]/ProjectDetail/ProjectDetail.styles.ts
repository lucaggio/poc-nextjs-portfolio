import { keyframes, styled } from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const fade = keyframes`
  from { opacity: 0; transform: scale(1.02); }
  to { opacity: 1; transform: scale(1); }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  height: 400px;
  margin: 0 auto 2rem;
  border-radius: 12px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const ProjectImage = styled(Image)<{ $loaded: boolean }>`
  object-fit: cover;
  transition: opacity 0.6s ease;
`;

export const shimmer = keyframes`
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
`;

export const Skeleton = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #f0f0f0 0px, #e8e8e8 40px, #f0f0f0 80px);
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s infinite linear;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  line-height: 1.6;
  text-align: center;
  animation: ${fade} 0.4s ease forwards;
`;
