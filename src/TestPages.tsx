import React from "react";
import {WindowWithTabsState} from "./3.Context + reducer/WindowWithTabs/WindowWithTabsReducer";

const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam modi
consectetur repellat possimus consequatur fugiat distinctio quasi, enim
nisi. Incidunt ratione illum consectetur libero. Laborum maxime
repudiandae minus repellat voluptas? Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Veniam modi consectetur repellat possimus
consequatur fugiat distinctio quasi, enim nisi. Incidunt ratione illum
consectetur libero. Laborum maxime repudiandae minus repellat voluptas?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam modi
consectetur repellat possimus consequatur fugiat distinctio quasi, enim
nisi. Incidunt ratione illum consectetur libero. Laborum maxime
repudiandae minus repellat voluptas? Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Veniam modi consectetur repellat possimus
consequatur fugiat distinctio quasi, enim nisi. Incidunt ratione illum
consectetur libero. Laborum maxime repudiandae minus repellat voluptas?`;

export const pages: WindowWithTabsState["options"] = {
  ["First page"]: (
    <div>
      <h2>First Page</h2>
      <div>{text}</div>
    </div>
  ),
  ["Second page"]: 123,
  ["Third page"]: (
    <div>
      <h2>Third page</h2>
      <div>{text.repeat(3)}</div>
    </div>
  ),
  ["Fourth page"]: "asdasdad",
};
