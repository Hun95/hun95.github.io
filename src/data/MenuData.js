import React from 'react';
// import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { ImOffice } from 'react-icons/im';
import { BsChatDots } from 'react-icons/bs';
import { GrTag } from 'react-icons/gr';
export const menuData = [
  {
    id: 1,
    title: (
      <GrTag
        style={{
          color: 'black',
          fontSize: '1.5rem',
          verticalAign: 'middle',
          marginTop: '2px',
        }}
      />
    ),
    link: '/tag',
    mobileTitle: 'Tags',
  },

  {
    id: 2,
    title: (
      <ImOffice
        style={{ color: 'black', fontSize: '1.5rem', verticalAign: 'middle' }}
      />
    ),
    link: '/together',
    mobileTitle: 'Together',
  },

  {
    id: 3,
    title: (
      <BsChatDots
        style={{ color: 'black', fontSize: '1.5rem', verticalAign: 'middle' }}
      />
    ),
    link: '/chat',
    mobileTitle: 'Chat',
  },

  {
    id: 4,
    title: (
      <BsChatDots
        style={{ color: 'black', fontSize: '1.5rem', verticalAign: 'middle' }}
      />
    ),
    link: '/blog',
    mobileTitle: 'Blog',
  },
];
