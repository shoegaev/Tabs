import React, {useContext} from "react";
import clsx from "clsx";
import cl from "../../styles/TabsStyle.module.scss";
import TabsContext from "./TabsContext";

export interface TabsProps {
  options: string[];
  className?: string;
}

const Tabs = ({className, options}: TabsProps) => {
  const [state, setState] = useContext(TabsContext) ?? [];
  const tabsJSX = options.map(option => {
    return (
      <div
        className={clsx(cl.Tab, {
          [cl.Tab_active]: option === state?.active,
        })}
        key={option}
        onClick={() => {
          if (state && setState) setState({...state, active: option});
        }}>
        {option}
      </div>
    );
  });
  return <div className={clsx(cl.Tabs, className)}>{tabsJSX}</div>;
};

export default Tabs;
