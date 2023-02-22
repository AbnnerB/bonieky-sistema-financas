import * as C from "./styles";

type ResumeItemProps = {
  title: string;
  value: number;
  color?: string;
};

export default function ResumeItem({ title, value, color }: ResumeItemProps) {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>R$ {value}</C.Info>
    </C.Container>
  );
}
