import { v4 } from "uuid";
import { ReactNode } from "react";

import { Car } from "./types";
import {
  CarCardWrapper,
  CarInfoContainer,
  CarInfo,
  CarInfoTitle,
  PageWrapper,
} from "./styles";

function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carCards: ReactNode[] = cars.map((carObj: Car) => {
    return (
      <CarCardWrapper key={v4()}>
        <CarInfoContainer>
          <CarInfoTitle>Brand:</CarInfoTitle>
          <CarInfo>{carObj.brand}</CarInfo>
        </CarInfoContainer>
        <CarInfoContainer>
          <CarInfoTitle>Price:</CarInfoTitle>
          <CarInfo>{`${carObj.price}$`}</CarInfo>
        </CarInfoContainer>
        <CarInfoContainer>
          <CarInfoTitle>Fuel type:</CarInfoTitle>
          <CarInfo>{carObj.isDiesel ? "Diesel" : "Petrol"}</CarInfo>
        </CarInfoContainer>
      </CarCardWrapper>
    );
  });

  return <PageWrapper>{carCards}</PageWrapper>;
}

export default Homework_06;
