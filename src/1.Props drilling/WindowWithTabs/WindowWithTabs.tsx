import React from "react";
import Tabs, {TabsProps} from "../Tabs/Tabs";
import clsx from "clsx";
import cl from "../../styles/WindowWithTabsStyle.module.scss";

export type WindowWithTabsProps = Omit<TabsProps, "options"> & {
  options: {
    [optionTitle: string]: React.JSX.Element;
  };
};

const WindowWithTabs = ({
  className,
  options,
  controlParams,
}: WindowWithTabsProps) => {
  const tabTitles = Object.keys(options);
  const [state] = controlParams;
  return (
    <div className={clsx(cl.WindowWithTabs, className)}>
      <Tabs
        className={cl.WindowWithTabs__tabs}
        options={tabTitles}
        controlParams={controlParams}
      />
      <div className={cl.WindowWithTabs__content}>{options[state.active]}</div>
    </div>
  );
};

export default WindowWithTabs;
