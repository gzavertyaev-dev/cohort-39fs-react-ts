import { useState, useEffect } from "react";
import axios from "axios";

import Button from "components/Button/Button";

import { Homework09Wrapper, Text, Card, ContainerJokes } from "./styles";

function Homework_09() {
  const [joke, setJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const RANDOM_JOKE_URL: string =
    "https://official-joke-api.appspot.com/random_joke";

  // Функция getJokes использующая fetch()
  //   const getJokes = async () => {
  //     setJoke(undefined);
  //     setError(undefined);

  //     const response = await fetch(RANDOM_JOKE_URL);
  //     console.log(response);

  //     // Забираем данные из response
  //     const result = await response.json();
  //     console.log(result);

  //     if (response.ok) {
  //       // Тут пишем логику по работе с успешно пришедшими данными
  //       setJoke(`${result.setup} ${result.punchline}`);
  //     } else {
  //       // Тут пишем логику по работе с ошибкой
  //       setError("Ошибка при получении данных");
  //     }
  //   };

  // Вариант с axios
  const getJokes = async () => {
    setJoke(undefined);
    setError(undefined);

    try {
      const response = await axios.get(RANDOM_JOKE_URL);

      // Тут пишем логику по работе с успешно пришедшими данными
      setJoke(`${response.data.setup} ${response.data.punchline}`);
      console.log(response);
    } catch (error: any) {
      // Тут пишем логику по работе с ошибкой
      console.log(error);
      setError(error.message);
    }
  };

  // Никогда не удаляте 2 аргумент у useEffect()
  // Если его удалить, то будет бесконечный вызов 1 аргумента: функции callback
  useEffect(() => {
    getJokes();
  }, []);

  return (
    <Homework09Wrapper>
      <Card>
        <ContainerJokes>
          {joke && <Text>{joke}</Text>}
          {error && <Text>{error}</Text>}
        </ContainerJokes>
        <Button name="Get new joke" onClick={getJokes} />
      </Card>
    </Homework09Wrapper>
  );
}

export default Homework_09;
