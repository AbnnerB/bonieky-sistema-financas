import * as C from "./styles";

type ResumeItemProps = {
  title: string;
  value: number;
  color?: string;
};

export default function ResumeItem({ title, value, color }: ResumeItemProps) {
  const formattedValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}> {formattedValue}</C.Info>
    </C.Container>
  );
}
