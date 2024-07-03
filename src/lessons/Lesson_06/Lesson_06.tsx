import "./styles.css";

function Lesson_06() {
  // 1 тип: string - строковый
  let userFullname: string = "John Johnson";
  // userFullname = 100; // будет ошибка!
  userFullname = "Johny Depp";

  let hello = `Hello, ${userFullname}`; // Если мы яано не прописываем тип данных переменной, то тип назначается автоматически(тип будет зависеть от 1 присвоенного значения)
  console.log(hello);
  // hello = 100; // будет ошибка
  /////////////////////////////////////////////////////////////////////////////////////////////////

  // 2 тип: number - числовой
  let number1: number = 100;
  // number1 = "200"; // будет ошибка
  number1 = 35.675;

  let number2: number = number1 / 0;
  console.log(number2);
  console.log(number2 === Infinity);
  /////////////////////////////////////////////////////////////////////////////////////////////////

  // 3 тип: boolean - буленовский
  let isAdmin: boolean = true;
  isAdmin = false;
  /////////////////////////////////////////////////////////////////////////////////////////////////

  // 4 - массивы
  const animals: string[] = ["Tiger", "Lion", "Dog"];
  animals.push("Cat");
  console.log(animals);
  // animals.push(100); // будет ошибка
  const numbers: number[] = [1, 2, 3, 4, 5];
  /////////////////////////////////////////////////////////////////////////////////////////////////

  // 5 - tupel
  const userArray: [
    string,
    string,
    string,
    number,
    string,
    string,
    string,
    number
  ] = ["name", "John", "age", 30, "name", "Pavel", "age", 40];
  /////////////////////////////////////////////////////////////////////////////////////////////////

  // 6 - functions
  // 6.1 ф-я, которая что-то выполняет, но ничего не возвращает
  const sayHi = (personName: string): void => {
    console.log(`Hello, ${personName}`);
  };

  const makeAlert = (): void => {
    alert("This is React Typescipt app");
  };
  // const makeAlert: () => void = () => {
  //   alert("This is React Typescipt app");
  // };
  // makeAlert();

  sayHi(userFullname);
  // sayHi(300); // будет ошибка
  /////////////////////////////////////////////////////////////////////////////////////////////////

  // - 6.2 - функции, которые что-то возвращают
  const add = (a: number, b: number): number => {
    return a + b;
  };
  console.log(add(1, 2));
  /////////////////////////////////////////////////////////////////////////////////////////////////

  // 7. Обьекты
  interface Admin {
    isAdmin: boolean;
  }

  interface UserAnimal {
    pet?: string;
  }

  interface User extends Admin, UserAnimal {
    firstName: string;
    lastName: string;
    age: number;
    job: string;
    // isAdmin: boolean;
  }

  // Можно дописывать свойства в интерфейсе
  interface User {
    isFamily: boolean;
  }

  const user1: User = {
    firstName: "John",
    lastName: "Johnson",
    age: 30,
    job: "QA",
    isAdmin: true,
    pet: "Dog",
    isFamily: true,
  };

  const user2: User = {
    firstName: "Johny",
    lastName: "Depp",
    age: 60,
    job: "Actor",
    isAdmin: false,
    isFamily: true,
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////

  // 8. undefined
  let userData: undefined = undefined;

  // 9. null
  let emptyVar: null = null;

  // 10. any
  let someVariable: any = "Some string";
  someVariable = 1000;

  // 11 - type
  type UserDataFromServer = User | undefined | null;
  let userDataFromServer: UserDataFromServer = user1;
  userDataFromServer = undefined;
  userDataFromServer = null;
  // userDataFromServer = 190; // будет ошибка

  // Типизация обьектов
  type GlobalAnimalProps = {
    isAnimal: boolean;
  };
//  - мы не можем наследовать типы
  type Animal = {
    type: string;
    age: number;
    color: string;
    isWild: boolean;
    speed?: string;
  };

  // type Animal = {
  //   speed: string;
  // }

  type GlobalAnimal  = GlobalAnimalProps & Animal;

  const animal1: GlobalAnimal = {
    isAnimal: true,
    type: "Tiger",
    age: 12,
    color: "orange",
    isWild: true,
  };

  const animal2: GlobalAnimal = {
    isAnimal: true,
    type: "Lion",
    age: 8,
    color: "orange",
    isWild: true,
    speed: "74 km/h"
  };

  return <div className="page_wrapper">Lesson 06</div>;
}

export default Lesson_06;
