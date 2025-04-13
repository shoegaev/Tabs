import {createContext} from "react";
import {ControlParams} from "../../types";

export interface TabsState {
  active: string;
}

const TabsContext = createContext<ControlParams<TabsState> | null>(null);
export default TabsContext;
