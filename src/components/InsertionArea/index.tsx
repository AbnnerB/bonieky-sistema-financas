import * as C from "./styles";

import { Item } from "../../types/Item";
import { useState } from "react";

type InsertionAreaProps = {
  onAdd: (item: Item) => void;
};

export default function InsertionArea({ onAdd }: InsertionAreaProps) {
  const [valueDateInput, setValueDateInput] = useState("");
  const [valueCategory, setValueCategory] = useState("food");
  const [valueTextInput, setValueTextInput] = useState("");
  const [valueInput, setValueInput] = useState(0);

  function addNewItem() {
    let errors: string[] = [];

    if (isNaN(new Date(valueDateInput).getTime())) {
      errors.push("Data inválida!");
    }

    if (valueTextInput === "") {
      errors.push("Título vazio!");
    }
    if (valueInput <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      return alert(errors.join("\n"));
    }

    const [year, month, day] = valueDateInput.split("-");
    const formatDate = `${year}-${month}-${parseInt(day) + 1}`;

    const objNewItem: Item = {
      date: new Date(formatDate),
      category: valueCategory,
      title: valueTextInput,
      value: valueInput,
    };

    onAdd(objNewItem);
    setValueInput(0);
    setValueTextInput("");
  }

  return (
    <C.Container>
      <C.TypeValue>
        <h3>Data</h3>
        <input
          type="date"
          value={valueDateInput}
          onChange={(e) => setValueDateInput(e.target.value)}
        />
      </C.TypeValue>
      <C.TypeValue>
        <h3>Categoria</h3>
        <select
          onChange={(e) => setValueCategory(e.target.value)}
          name=""
          id=""
        >
          <option value="food">Alimentação</option>
          <option value="rent">Aluguel</option>
          <option value="salary">Salário</option>
        </select>
      </C.TypeValue>
      <C.TypeValue>
        <h3>Titulo</h3>
        <input
          type="text"
          value={valueTextInput}
          onChange={(e) => setValueTextInput(e.target.value)}
        />
      </C.TypeValue>
      <C.TypeValue>
        <h3>Valor</h3>
        <input
          type="number"
          value={valueInput}
          onChange={(e) => setValueInput(parseFloat(e.target.value))}
          placeholder="0"
        />
      </C.TypeValue>
      <C.ButtonAdd onClick={addNewItem}>Adicionar</C.ButtonAdd>
    </C.Container>
  );
}
