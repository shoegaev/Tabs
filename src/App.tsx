import React from "react";
import cl from "./AppStyle.module.scss";
import {pages} from "./TestPages";




import { useState } from "react";
import WindowWithTabs from "./1.Props drilling/WindowWithTabs/WindowWithTabs";
import {TabsState} from "./1.Props drilling/Tabs/Tabs";
function App() {
  const WindowControlParams = useState<TabsState>({
    active: Object.keys(pages)[0],
  });
  return (
    <main>
      <WindowWithTabs
        className={cl.Window}
        controlParams={WindowControlParams}
        options={pages}
      />
    </main>
  );
}

// import { useState } from "react";
// import WindowWithTabs from "./2.Context/WindowWithTabs/WindowWithTabs";
// import TabsContext, {TabsState} from "./2.Context/Tabs/TabsContext";
// function App() {
//   const WindowControlParams = useState<TabsState>({
//     active: Object.keys(pages)[0],
//   });
//   return (
//     <main>
//       <TabsContext.Provider value={WindowControlParams}>
//         <WindowWithTabs className={cl.Window} options={pages} />
//       </TabsContext.Provider>
//     </main>
//   );
// }




// import { useReducer } from "react";
// import WindowWithTabs from "./3.Context + reducer/WindowWithTabs/WindowWithTabs";
// import WindowWithTabsContext from "./3.Context + reducer/WindowWithTabs/WindowWithTabsContext";
// import windowWithTabsReducer, {
//   WindowWithTabsReducer,
// } from "./3.Context + reducer/WindowWithTabs/WindowWithTabsReducer";
// function App() {
//   const [state, dispatch] = useReducer<WindowWithTabsReducer>(
//     windowWithTabsReducer,
//     {active: Object.keys(pages)[0], options: pages},
//   );
//   return (
//     <main>
//       <WindowWithTabsContext.Provider value={[state, dispatch]}>
//         <WindowWithTabs className={cl.Window} />
//       </WindowWithTabsContext.Provider>
//       <button
//         onClick={() => {
//           dispatch({type: "goToPrev"});
//         }}>
//         {"<"}
//       </button>
//       <button
//         onClick={() => {
//           dispatch({type: "goToNext"});
//         }}>
//         {">"}
//       </button>
//     </main>
//   );
// }

export default App;
