import styled from 'styled-components';
import { Button } from '../Button/styled';
export const Container = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  > ${Button} {
    position: relative;
    right: 0px;
    bottom: -1px;
    width: 50px;
    outline: 0;
    border: 0;
    background-color: black;
    color: #fff;
    height: 30px;
  }
  > ${Button}:nth-child(2n + 1) {
    background-color: red;
    border-radius: 0 5px 0 0;
  }

  > ${Button}:nth-child(2n) {
    border-radius: 5px 0 0 0;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  width: 175px;
`;
