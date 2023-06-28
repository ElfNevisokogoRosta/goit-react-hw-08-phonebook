import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const FormWrpaer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;
const InputWraper = styled.label`
  display: block;
  font-size: 16px;
  font: inherit;
  font-weight: 700;
  line-height: 1.14;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textColor};
`;
const InputElement = styled.input`
  font-size: 18px;
  padding: 10px 5px 10px 15px;
  width: 400px;
  border-radius: 10px;
  border: none;
`;
const SubmitBtn = styled.button`
  align-self: center;
  padding: 15px 20px 15px 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.14;
  letter-spacing: 0.1em;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.accent};
  cursor: pointer;
  transition: background-color, 250ms, cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: ${(props) => props.theme.accentTextcolor};
  }
`;
export { Container, FormWrpaer, InputWraper, InputElement, SubmitBtn };
