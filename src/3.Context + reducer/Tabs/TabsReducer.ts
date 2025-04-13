import {Reducer} from "react";
import {TabsState} from "./TabsContext";

interface goTo {
  type: "goTo";
  newActive: string;
}

interface goToNext {
  type: "goToNext";
}

interface goToPrev {
  type: "goToPrev";
}

export type TabsReducerActions = goTo | goToNext | goToPrev;

export type TabsReducer = Reducer<TabsState, TabsReducerActions>;

const tabsReducer: TabsReducer = (state, action) => {
  const activeIndex = state.options.findIndex(x => x === state.active);
  let newActive: string | undefined;
  if (action.type === "goTo") {
    if (state.options.find(x => x === action.newActive)) {
      newActive = action.newActive;
    }
  } else if (activeIndex !== -1) {
    if (action.type === "goToNext") {
      if (activeIndex >= state.options.length - 1) {
        newActive = state.options[0];
      } else {
        newActive = state.options[activeIndex + 1];
      }
    }
    if (action.type === "goToPrev") {
      if (activeIndex === 0) {
        newActive = state.options[state.options.length - 1];
      } else {
        newActive = state.options[activeIndex - 1];
      }
    }
  }

  return {
    ...state,
    active: newActive ?? state.active,
  };
};

export default tabsReducer;
