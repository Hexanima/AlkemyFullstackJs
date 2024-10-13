import { TotalsItem } from "./totals-item";

export function Totals() {
  return (
    <section className="flex flex-col gap-2">
      <TotalsItem text="Ingreso" value={100000000}/>
      <TotalsItem text="Egreso" value={200000000}/>
      <TotalsItem text="Total" value={-100000000}/>
    </section>
  );
}
