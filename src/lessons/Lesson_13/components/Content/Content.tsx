// Шаг 3: Импортируем useContext их react и импортируем MainContext, заранее созданный в компоненте Main
import { useContext } from "react";
import { MainContext } from "lessons/Lesson_13/components/Main/Main";
import { UserData } from "lessons/Lesson_13/components/Main/types";

import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";

// interface ContentProps {
//   fullName: string | undefined;
//   age: number | undefined;
//   jobPosition: string | undefined;
// }

function Content() {
  // Шаг 4: Получаем доступ к данным, которые мы храним в контексте компонента Main
  const userData = useContext<UserData | undefined>(MainContext);
  console.log(userData);

  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      <ContentInfo>{userData?.fullName}</ContentInfo>
      <ContentInfo>{userData?.age}</ContentInfo>
      <ContentInfo>{userData?.jobPosition}</ContentInfo>
    </ContentWrapper>
  );
}

export default Content;
