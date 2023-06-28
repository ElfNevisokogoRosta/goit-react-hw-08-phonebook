import styled, { css } from "styled-components";
const Container = styled.div`
  padding: 0px 15px;
  margin: 30px auto;
`;
const Navigation = styled.ul`
  display: flex;
  width: 20%;
  margin: 0px auto;
  padding: 0;
  gap: 30px;
  list-style-type: none;
`;
const NavigationContainer = styled.nav`
  margin: 0;
  padding: 0;
`;
const activeStyles = css`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.accentTextcolor};
`;

const NavigationElement = styled.li`
  display: block;
  padding: 10px 30px;
  font-size: 24px;
  color: ${(props) => props.theme.textColor};
  font-weight: 700;
  line-height: 1.44;
  letter-spacing: 0.1em;
  cursor: pointer;
  border: 2px solid
    ${(props) => {
      return props.theme.accentTextcolor;
    }};
  background-color: ${(props) => props.theme.backGround};
  border-radius: 8px;
  ${(props) =>
    props.className === "active" &&
    css`
      ${activeStyles}
    `}

  &:hover {
    ${activeStyles}
  }
`;
export { Container, Navigation, NavigationContainer, NavigationElement };
