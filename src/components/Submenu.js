import React from 'react';
import styled from 'styled-components';
import { submenuData } from '../data/SubmenuData';
const Submenu = () => {
  return (
    <>
      <SubmenuWrap>
        <Menu>
          <p>Tool</p>
          {submenuData.map(names => {
            const { id, name } = names;
            return <Item key={id}>▫ {name}</Item>;
          })}
        </Menu>
      </SubmenuWrap>
    </>
  );
};

export default Submenu;

const SubmenuWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: sticky;
  max-height: 200px;
  margin-left: 1rem;
  top: 100px;

  bottom: 0;
  left: 0;
  right: 0;
  p {
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Menu = styled.div`
  margin: 10px 10px 10px 30px;
`;

const Item = styled.div`
  margin-bottom: 10px;
`;
