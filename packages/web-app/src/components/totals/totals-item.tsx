import { toThousand } from "../../utils/to-thousand";

interface TotalsItemProps {
  text: string;
  value: number;
}

export function TotalsItem({ text, value }: TotalsItemProps) {
  return (
    <article className="flex justify-between items-center">
      <p className="text-xl">{text}:</p>
      <p className="text-base">${toThousand(value)}</p>
    </article>
  );
}
