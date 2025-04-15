import {Reducer} from "react";
import tabsReducer, {TabsReducerActions} from "../Tabs/TabsReducer";

export interface WindowWithTabsState {
  active: string;
  options: {[optionTitle: string]: React.ReactNode};
}

export type WindowWithTabsReducer = Reducer<
  WindowWithTabsState,
  TabsReducerActions
>;

const windowWithTabsReducer: WindowWithTabsReducer = (state, action) => {
  const newTabState = tabsReducer(
    {active: state.active, options: Object.keys(state.options)},
    action,
  );
  return {
    ...state,
    active: newTabState.active,
  };
};

export default windowWithTabsReducer;
