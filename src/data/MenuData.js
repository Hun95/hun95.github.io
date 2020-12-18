import React from "react";
// import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { ImOffice } from "react-icons/im";
import { BsChatDots } from "react-icons/bs";
import { GrTag } from "react-icons/gr";
export const menuData = [
  {
    title: (
      <GrTag
        style={{
          color: "black",
          fontSize: "1.5rem",
          verticalAign: "middle",
          marginTop: "2px",
        }}
      />
    ),
    link: "/tag",
  },

  {
    title: (
      <ImOffice
        style={{ color: "black", fontSize: "1.5rem", verticalAign: "middle" }}
      />
    ),
    link: "/together",
  },

  {
    title: (
      <BsChatDots
        style={{ color: "black", fontSize: "1.5rem", verticalAign: "middle" }}
      />
    ),
    link: "/chat",
  },

  // {
  //   title: (
  //     <AiFillGithub
  //       style={{ color: "black", fontSize: "1.5rem", verticalAign: "middle" }}
  //     />
  //   ),
  //   link: "https://github.com/",
  // },

  // {
  //   title: (
  //     <AiOutlineInstagram
  //       style={{ color: "red", fontSize: "1.5rem", verticalAign: "middle" }}
  //     />
  //   ),
  //   link: "https://instagram.com/hun95__",
  // },
];
