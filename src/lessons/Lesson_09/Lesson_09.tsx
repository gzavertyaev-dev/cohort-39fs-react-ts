import { useState, ChangeEvent, useEffect } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { Lesson_09Wrapper, InputControl, ButtonControl } from "./styles";

function Lesson_09() {
  //   const [searchInputValue, setSearchInputValue] = useState<string>("");

  //   const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
  //     // console.log(event.target.value);
  //     setSearchInputValue(event.target.value);
  //   };

  //   const onSearch = () => {
  //     console.log(searchInputValue);
  //   };

  // 1 Lifesycle phase - MOUNTING
  // 1 аргумент - функция, которая должна выполнится в определенный жизненный цикл компонента
  // 2 аргумент - массив зависимостей, с помощью него мы можем определить жизненный цикл компонента
  // Если мы прокидываем пустой массив во 2 аргументе, то мы определяем 1 фазу жизненного цикла - Mounting
  //   useEffect(() => {
  //     console.log("Mounting!!!");
  //   }, []);

  //   console.log("Render");
  //   // 2 фаза - Updating
  //   useEffect(() => {
  //     console.log("Updating");
  //   }, [searchInputValue]);

  //   // 3 фаза - Unmounting
  //   useEffect(() => {
  //     return () => {
  //       console.log("Unmounting");
  //     };
  //   }, []);

  const [searchRandomJokeValue, setSearchRandomJokeValue] =
    useState<string>("");
  const [catFact, setCatFact] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchRandomJokeValue(event.target.value);
  };

  const getRandomJoke = async () => {
    setError(undefined);
    setCatFact(undefined);

    const response = await fetch(
      "https://catfact.ninja/fact"
    );
    console.log(response);

    const result = await response.json();

    console.log(result);

    if (response.ok) {
      // Действия по отображению данных на странице
      setCatFact(result.fact);
    } else {
      // Действия по отображению ошибки на странице
      setError("Error message during random joke request");
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, [searchRandomJokeValue]);

  return (
    <Lesson_09Wrapper>
      <InputControl>
        <Input
          id="search-input"
          label="Get Random joke"
          name="search"
          placeholder="Enter letter to get random joke"
          value={searchRandomJokeValue}
          onChange={onChange}
        />
      </InputControl>
      {catFact && <p>{catFact}</p>}
      {error && <p>{error}</p>}
      {/* <InputControl>
        <Input
          id="search-input"
          label="Search"
          name="search"
          placeholder="Enter item for search"
          value={searchInputValue}
          onChange={onChangeInput}
        />
        <input
          id="search-input"
          name="search"
          placeholder="Enter item for search"
          //   value - это значение самого инпута, т.е то значение котрое введет потенциальный пользователь
          value={searchInputValue}
          // onChange - функция, которая срабатывает, когда пользователь что-то вводит в инпут
          onChange={onChangeInput}
        />
      </InputControl>
      <ButtonControl>
        <Button name="Search" onClick={onSearch} />
      </ButtonControl> */}
    </Lesson_09Wrapper>
  );
}

export default Lesson_09;
