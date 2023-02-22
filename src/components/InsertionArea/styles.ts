import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  box-shadow: 0px 0px 5px #ccc;
  padding: 10px 25px;
  gap: 1rem;
`;

export const TypeValue = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  h3 {
    font-weight: bold;
  }

  input,
  select {
    height: 40px;
    padding: 8px 2px;
  }
`;

export const ButtonAdd = styled.button`
  height: 40px;
  border: none;
  outline: none;
  padding: 8px 5px;
  flex: 1;
  background-color: #e3f4fe;
  cursor: pointer;
`;
