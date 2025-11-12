"use client";

import { SKILLS } from "./AboutContext.constants";

import * as S from "./AboutContent.styles";

export function AboutContent() {
  return (
    <S.Container>
      <S.Avatar
        src="https://i.pravatar.cc/160?img=65"
        alt="Profile photo"
        loading="lazy"
        decoding="async"
      />
      <S.Title>About Me</S.Title>

      <S.Section>
        <p>
          Hi! I&apos;m <strong>Luca</strong>, a Frontend Developer passionate
          about building clean, intuitive, and high-performance web interfaces.
          I enjoy combining design and logic to create experiences that feel
          smooth and natural.
        </p>
        <p>
          With around three and a half years of experience in React and
          TypeScript, I&apos;ve worked on dashboards, complex UIs, and SaaS
          platforms, always following best practices and modern development
          standards.
        </p>
      </S.Section>

      <S.Section>
        <h2>My Skills</h2>
        <S.SkillList>
          {SKILLS.map((skill: string, i) => (
            <S.Skill key={i}>{skill}</S.Skill>
          ))}
        </S.SkillList>
      </S.Section>
    </S.Container>
  );
}
