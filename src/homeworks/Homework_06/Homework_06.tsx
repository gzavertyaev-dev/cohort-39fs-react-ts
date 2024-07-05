import { v4 } from "uuid";
import { ReactNode } from "react";

import { Car } from "./types";
import "./styles.css";

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
      <div key={v4()} className="car-card-wrapper">
        <div className="car-info-container">
          <p className="car-info-title">Brand:</p>
          <p className="car-info">{carObj.brand}</p>
        </div>
        <div className="car-info-container">
          <p className="car-info-title">Price:</p>
          <p className="car-info">{`${carObj.price}$`}</p>
        </div>
        <div className="car-info-container">
          <p className="car-info-title">Fuel type:</p>
          <p className="car-info">{carObj.isDiesel ? "Diesel" : "Petrol"}</p>
        </div>
      </div>
    );
  });

  return <div className="homework6-wrapper">{carCards}</div>;
}

export default Homework_06;
