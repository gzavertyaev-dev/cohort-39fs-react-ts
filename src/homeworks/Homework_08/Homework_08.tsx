import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { Homework08Wrapper, ButtonControl, InputControl } from "./styles";

function Homework_08() {
  return (
    <Homework08Wrapper>
      <ButtonControl>
        <Button name="Simple Button" onClick={() => {}} />
      </ButtonControl>
      <ButtonControl>
        {/* Если мы прокидываем пропсу компоненту и не передаем никакого значения(при условии что она буленовского типа)
        То она у  по умолчанию она будет равна true
        Пример: disabled у кнопки */}
        <Button disabled name="Disabled Button" onClick={() => {}} />
      </ButtonControl>
      <ButtonControl>
        <Button isRed name="Error Button" onClick={() => {}} />
      </ButtonControl>
      <InputControl>
        <Input id="id_1" label="Simple Input" name="simpleInput" />
      </InputControl>
      <InputControl>
        <Input disabled id="id_1" label="Simple Input" name="simpleInput" />
      </InputControl>
      <InputControl>
        <Input
          error="Some error"
          id="id_1"
          label="Simple Input"
          name="simpleInput"
        />
      </InputControl>
    </Homework08Wrapper>
  );
}

export default Homework_08;
