import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, Description, ButtonControl } from "./styles";
import { ClientTemplateProps } from "./types";

function ClientTemplate({ children }: ClientTemplateProps) {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <Description>{children}</Description>
      <ButtonControl>
        <Button name="Go back" onClick={goback} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default ClientTemplate;
