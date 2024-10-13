import { Movement } from "app-domain";
import { MovementsItem } from "./movements-item";

const movementList: Movement[] = [
  {
    id: "id1",
    amount: -200000000,
    category: "Categoria",
    concept: "Concepto capaz muy largo",
    date: "31/12/1978",
    type: "Egreso",
  },
  {
    id: "id2",
    amount: 100000000,
    category: "Categoria",
    concept: "Concepto capaz muy largo",
    date: "31/12/1978",
    type: "Ingreso",
  },
  {
    id: "id3",
    amount: 100000000,
    category: "Categoria",
    concept: "Concepto capaz muy largo",
    date: "31/12/1978",
    type: "Ingreso",
  },
  {
    id: "id4",
    amount: 100000000,
    category: "Categoria",
    concept: "Concepto capaz muy largo",
    date: "31/12/1978",
    type: "Ingreso",
  },
  {
    id: "id5",
    amount: 100000000,
    category: "Categoria",
    concept: "Concepto capaz muy largo",
    date: "31/12/1978",
    type: "Ingreso",
  },
];

export function Movements() {
  return (
    <section className="flex flex-col gap-2">
      <p className="text-xl">Movimientos</p>
      {movementList.map((movement) => (
        <MovementsItem {...movement} key={movement.id} />
      ))}
    </section>
  );
}
