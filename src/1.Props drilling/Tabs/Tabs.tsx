import React from "react";
import {ControlParams} from "../../types";
import clsx from "clsx";
import cl from "../../styles/TabsStyle.module.scss";

export interface TabsState {
  active: string;
}

export interface TabsProps {
  options: string[];
  controlParams: ControlParams<TabsState>;
  className?: string;
}

const Tabs = ({className, options, controlParams}: TabsProps) => {
  const [state, setState] = controlParams;
  const tabsJSX = options.map(option => {
    return (
      <div
        className={clsx(cl.Tab, {
          [cl.Tab_active]: option === state.active,
        })}
        key={option}
        onClick={() => {
          setState({...state, active: option});
        }}>
        {option}
      </div>
    );
  });
  return <div className={clsx(cl.Tabs, className)}>{tabsJSX}</div>;
};

export default Tabs;
