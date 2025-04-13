import React, {useContext, useEffect, useReducer} from "react";
import Tabs from "../Tabs/Tabs";
import TabsContext from "../Tabs/TabsContext";
import tabsReducer, {TabsReducer} from "../Tabs/TabsReducer";
import WindowWithTabsContext from "./WindowWithTabsContext";
import clsx from "clsx";
import cl from "../../styles/WindowWithTabsStyle.module.scss"

export interface WindowWithTabsProps {
  className?: string;
}

const WindowWithTabs = ({className}: WindowWithTabsProps) => {
  const [state, dispatch] = useContext(WindowWithTabsContext);
  const [tabsState, tabsDispatch] = useReducer<TabsReducer>(tabsReducer, {
    active: state.active,
    options: Object.keys(state.options),
  });
  const isDataSynchronised = state.active === tabsState.active;
  useEffect(() => {
    if (!isDataSynchronised) {
      tabsDispatch({type: "goTo", newActive: state.active});
    }
  }, [state]);
  useEffect(() => {
    if (dispatch && !isDataSynchronised)
      dispatch({type: "goTo", newActive: tabsState.active});
  }, [tabsState]);
  return (
    <div className={clsx(cl.WindowWithTabs, className)}>
      <TabsContext.Provider value={[tabsState, tabsDispatch]}>
        <Tabs className={cl.WindowWithTabs__tabs} />
      </TabsContext.Provider>

      <div className={cl.WindowWithTabs__content}>
        {state.options[state.active]}
      </div>
    </div>
  );
};

export default WindowWithTabs;
