import React from "react";
import Container from "./Container";
import { Car } from "../types";

type ReturnType = {
  message: string;
  data: Car[];
};

const getCars = async (): Promise<ReturnType> => {
  try {
    const res = await fetch("http://localhost:3000/api/vehicles");
    return res.json();
  } catch (error: unknown) {
    throw new Error("Araçları alırken bir sorun oluştu..");
  }
};
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const List = async () => {
  await delay(3000);
  const { data } = await getCars();

  return (
    <Container>
      <h2 className="text-2xl md:text-3xl font-bold mt-10 ">
        Bütün Araçları Keşfedin...
      </h2>
      <div>
        {data.map((car) => (
          <div>
            <h1>
              {car.make}
              {car.model}
            </h1>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default List;
