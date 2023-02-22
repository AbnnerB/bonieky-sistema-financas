import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0px;

  @media screen and (max-width: 450px) {
    overflow-y: auto;
    max-width: 70px;
    white-space: nowrap;
  }
  @media screen and (max-width: 350px) {
    max-width: 50px;
  }
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 10px 5px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
