import {createContext} from "react";
import { TabsReducerActions } from "../Tabs/TabsReducer";

export interface WindowWithTabsState {
  active: string;
  options: {[optionTitle: string]: React.JSX.Element};
}

const WindowWithTabsContext = createContext<
  [WindowWithTabsState, React.Dispatch<TabsReducerActions> | null]
>([{active: "", options: {}}, null]);
export default WindowWithTabsContext;
