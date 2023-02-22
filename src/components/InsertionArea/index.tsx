import * as C from "./styles";

import { Item } from "../../types/Item";
import { useState } from "react";

type InsertionAreaProps = {
  onAdd: (item: Item) => void;
};

export default function InsertionArea({ onAdd }: InsertionAreaProps) {
  const [valueDateInput, setValueDateInput] = useState("");
  const [valueCategory, setValueCategory] = useState("Alimentação");
  const [valueTextInput, setValueTextInput] = useState("");
  const [valueInput, setValueInput] = useState("");

  //   const dateActual = new Date();

  //   const objNewItem: Item = {
  //     date: new Date(valueDateInput),
  //     category: valueCategory,
  //     title: valueTextInput,
  //     value: parseInt(valueInput),
  //   };

  //funciona padrap
  //   const objNewItem2: Item = {
  //     date: new Date(2023, 1, 12),
  //     category: "food",
  //     title: "valueTextInput",
  //     value: 325.45,
  //   };

  //    ||

  function addNewItem() {
    if (valueDateInput === "" || valueTextInput === "" || valueInput === "") {
      return alert("Preencha todos os campos de texto");
    }

    const [year, month, day] = valueDateInput.split("-");
    const formatDate = `${year}-${month}-${parseInt(day) + 1}`;

    const objNewItem: Item = {
      date: new Date(formatDate),
      category: valueCategory,
      title: valueTextInput,
      value: parseInt(valueInput),
    };

    onAdd(objNewItem);
    setValueInput("");
    setValueTextInput("");

    console.log(objNewItem.date);
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
          onChange={(e) => setValueInput(e.target.value)}
          placeholder="0"
        />
      </C.TypeValue>
      <C.ButtonAdd onClick={addNewItem}>Adicionar</C.ButtonAdd>
    </C.Container>
  );
}
