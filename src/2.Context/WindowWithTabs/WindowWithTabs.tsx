import React, {useContext} from "react";
import Tabs, {TabsProps} from "../Tabs/Tabs";
import TabsContext from "../Tabs/TabsContext";
import clsx from "clsx";
import cl from "../../styles/WindowWithTabsStyle.module.scss";


export type WindowWithTabsProps = Omit<TabsProps, "options"> & {
  options: {
    [optionTitle: string]: React.ReactNode;
  };
};

const WindowWithTabs = ({className, options}: WindowWithTabsProps) => {
  const tabTitles = Object.keys(options);
  const [state] = useContext(TabsContext) ?? [];
  return (
    <div className={clsx(cl.WindowWithTabs, className)}>
      <Tabs
        className={cl.WindowWithTabs__tabs}
        options={tabTitles}
      />
      <div className={cl.WindowWithTabs__content}>
        {options[state?.active ?? ""]}
      </div>
    </div>
  );
};

export default WindowWithTabs;
