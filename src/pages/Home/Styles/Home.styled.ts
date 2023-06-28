import styled from "styled-components";
const UserInfoContainer = styled.ul`
  width: 700px;
  display: flex;
  margin: 30px 0px 30px auto;
  padding: 0;
  list-style: none;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;
const UserInfoElement = styled.li`
  font-size: 24px;
  padding: 0 15px;
  color: ${(porps) => porps.theme.textColor};
`;
const NameContainer = styled.span`
  text-transform: capitalize;
`;

export { UserInfoContainer, UserInfoElement, NameContainer };
