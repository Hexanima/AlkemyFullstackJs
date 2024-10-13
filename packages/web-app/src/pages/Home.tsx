import { Filters } from "../components/filters";
import { Movements } from "../components/movements/movements";
import { Totals } from "../components/totals/totals";

export function Home() {
  return (
    <>
      <Totals />
      <Filters />
      <Movements />
    </>
  );
}
