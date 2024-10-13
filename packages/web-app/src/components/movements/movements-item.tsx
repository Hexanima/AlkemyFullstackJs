import { Movement } from "app-domain";
import { toThousand } from "../../utils/to-thousand";

export function MovementsItem(movement: Movement) {
  return (
    <article className="w-full text-base text-dark">
      <div
        className={`p-2 flex justify-between items-center rounded-t-xl ${
          movement.type == "Ingreso" ? "bg-in" : "bg-out"
        }`}
      >
        <p>{movement.type}</p>
        <p>${toThousand(movement.amount)}</p>
      </div>
      <div className="p-2 bg-secondary rounded-b-xl flex flex-col gap-2 text-dark">
        <p>{movement.concept}</p>
        <div className="flex justify-between text-xs">
          <p>{movement.category}</p>
          <p>{movement.date}</p>
        </div>
      </div>
    </article>
  );
}
