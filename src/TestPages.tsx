import React from "react";
import {WindowWithTabsProps} from "./1.Props drilling/WindowWithTabs/WindowWithTabs";

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

export const pages: WindowWithTabsProps["options"] = {
  ["First page"]: (
    <div>
      <h2>First Page</h2>
      <div>{text}</div>
    </div>
  ),
  ["Second page"]: (
    <div>
      <h2>Second page</h2>
      <div>{text.repeat(2)}</div>
    </div>
  ),
  ["Third page"]: (
    <div>
      <h2>Third page</h2>
      <div>{text.repeat(3)}</div>
    </div>
  ),
  ["Fourth page"]: (
    <div>
      <h2>Fourth page</h2>
      <div>{text.repeat(4)}</div>
    </div>
  ),
};
