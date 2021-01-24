import styled from 'styled-components';
import { FlexBox } from '../Global/Styled';
import { breakDown } from '../Global/Theme';
const Button = styled.button`
  background-color: #ffd42a;
  color: black;
  font-size: 15px;
  margin-right: 1rem;
  border: none;
  border-radius: 2rem;
  padding: 1% 1%;

  text-align: center;
  min-width: 4rem;

  &:hover {
    background: #fff5cc;
  }
`;
const Wrap = styled.div`
  margin-bottom: 2rem;
  background: #fafafa;

  padding: 1rem;

  border: 2px solid #e6e6e6;
  border-radius: 1rem;
  overflow-x: auto;
  height: auto;
  white-space: nowrap;
  ${FlexBox}

  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export { Button, Wrap };
