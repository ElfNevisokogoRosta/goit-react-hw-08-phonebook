import styled from "styled-components";
const Formwraper = styled.form`
  margin: 30px 0px 0px 0px;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  border-radius: 15px;
  background-color: #0d98bb;
`;
const NameInput = styled.input`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  padding: 10px 0px 10px 15px;
  background-color: #8dd9cd;
  border: none;
  border-radius: 15px;
  transition: background-color, 250ms;
  color: #fff;
  &:focus {
    border: none;
    outline: none;
    background-color: #30bfbe;
    color: #fff;
  }
`;
const NumberInput = styled.input`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  padding: 10px 0px 10px 15px;
  background-color: #8dd9cd;
  border: none;
  border-radius: 15px;
  transition: background-color, 250ms;
  color: #fff;
  &:focus {
    border: none;
    outline: none;
    background-color: #30bfbe;
    color: #fff;
  }
`;
const Btn = styled.button`
  display: block;
  width: 240px;
  margin-left: auto;
  margin-right: auto;
  background-color: #534b7c;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  transition: background-color, 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #ce3c15;
  }
`;
export { Formwraper, FormContainer, NameInput, NumberInput, Btn };
