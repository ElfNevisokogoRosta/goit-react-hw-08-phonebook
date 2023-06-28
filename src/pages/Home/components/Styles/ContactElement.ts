import styled from "styled-components";
const Container = styled.li`
  width: 500px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 24px;
`;
const DataContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;
const NumberContainer = styled.span`
  font-size: 24px;
  padding-left: 15px;
  color: #fff;
`;

const Btn = styled.button`
  display: block;
  font-size: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #8dd9cd;
  color: #fff;
  text-transform: capitalize;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
export { Container, DataContainer, NumberContainer, Btn };
