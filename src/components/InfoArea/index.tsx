import { formatCurrentMonth } from "../../helpers/dateFilter";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";

type InfoAreaProps = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export default function InfoArea({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: InfoAreaProps) {
  function handlePrevMonth() {
    //somente um espaço

    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(
      `${currentDate.getFullYear()}- ${currentDate.getMonth() + 1}`
    );
  }

  function handleNextMonth() {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(
      `${currentDate.getFullYear()}- ${currentDate.getMonth() + 1}`
    );
  }

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          title="Balanço"
          value={income - expense}
          color={income - expense > 0 ? "green" : "red"}
        />
      </C.ResumeArea>
    </C.Container>
  );
}
