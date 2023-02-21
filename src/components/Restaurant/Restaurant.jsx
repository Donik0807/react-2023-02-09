import React from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <div>
        <h2>{name}</h2>
        <Menu menu={menu}></Menu>
        <Reviews reviews={reviews}></Reviews>
      </div>
    </div>
  );
};

/*
export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return React.createElement(
    "div",
    {},
    React.createElement("div"),
    React.createElement("h2", {}, name),
    React.createElement(Menu, { menu }),
    React.createElement(Reviews, { reviews })
  );
};
*/