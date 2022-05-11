import styled from "styled-components";

export const ButtonLink = styled.a`
  border-radius: 50px;
  background: #171717;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.1s ease-in-out;
    background: #121212;
  }
`;

export const FilterButton = styled.div`
  border-radius: 50px;
  background: ${({ active }) => (active ? "#9266b0" : "#171717")};
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
  text-decoration: none;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;

  &:hover {
    transition: all 0.1s ease-in-out;
    background: ${({ active }) => (active ? "#7D5796" : "#121212")};
  }
`;
