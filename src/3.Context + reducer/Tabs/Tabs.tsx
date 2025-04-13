import React, {useContext} from "react";
import clsx from "clsx";
import cl from "../../styles/TabsStyle.module.scss";
import TabsContext from "./TabsContext";

export interface TabsProps {
  className?: string;
}

const Tabs = ({className}: TabsProps) => {
  const [state, dispatch] = useContext(TabsContext);
  const tabsJSX = state.options.map(option => {
    return (
      <div
        className={clsx(cl.Tab, {
          [cl.Tab_active]: option === state?.active,
        })}
        key={option}
        onClick={() => {
          if (dispatch) dispatch({type: "goTo", newActive: option});
        }}>
        {option}
      </div>
    );
  });
  return <div className={clsx(cl.Tabs, className)}>{tabsJSX}</div>;
};

export default Tabs;
