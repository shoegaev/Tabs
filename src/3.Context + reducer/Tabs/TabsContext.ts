import {createContext} from "react";
import {TabsReducerActions} from "./TabsReducer";

export interface TabsState {
  active: string;
  options: string[];
}

const TabsContext = createContext<
  [TabsState, React.Dispatch<TabsReducerActions> | null]
>([{active: "", options: []}, null]);
export default TabsContext;
