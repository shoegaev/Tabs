import React, {useContext} from "react";
import Tabs from "../Tabs/Tabs";
import TabsContext from "../Tabs/TabsContext";
import WindowWithTabsContext from "./WindowWithTabsContext";
import clsx from "clsx";
import cl from "../../styles/WindowWithTabsStyle.module.scss";

export interface WindowWithTabsProps {
  className?: string;
}

const WindowWithTabs = ({className}: WindowWithTabsProps) => {
  const [state, dispatch] = useContext(WindowWithTabsContext);
  return (
    <div className={clsx(cl.WindowWithTabs, className)}>
      <TabsContext.Provider
        value={[
          {active: state.active, options: Object.keys(state.options)},
          dispatch,
        ]}>
        <Tabs className={cl.WindowWithTabs__tabs} />
      </TabsContext.Provider>

      <div className={cl.WindowWithTabs__content}>
        {state.options[state.active]}
      </div>
    </div>
  );
};

export default WindowWithTabs;
