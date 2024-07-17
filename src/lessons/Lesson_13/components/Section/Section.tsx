import Content from "lessons/Lesson_13/components/Content/Content";

import { SectionTitle, SectionWrapper } from "./styles";

// interface SectionProps {
//   fullName: string | undefined;
//   age: number | undefined;
//   jobPosition: string | undefined;
// }

function Section() {
  return (
    <SectionWrapper>
      <SectionTitle>Section Component</SectionTitle>
      <Content />
    </SectionWrapper>
  );
}

export default Section;
