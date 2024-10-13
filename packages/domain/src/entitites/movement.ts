export interface Movement {
  id: string;
  type: "Ingreso" | "Egreso";
  amount: number;
  concept: string;
  category: string;
  date: string;
}
