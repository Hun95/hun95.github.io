import React from 'react';
import { SubmenuWrap, Menu, Item } from './style';
import { submenuData } from '../../data/SubmenuData';
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
