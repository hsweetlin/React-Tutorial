import React, { useReducer, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { SideMenu } from "./components/SideMenu/SideMenu"
import { Dashboard } from "./components/Dashboard/Dashboard"
import { ReactJSX } from "./components/ReactJsx/ReactJSX";
import { Components } from "./components/ReactComponents/Components";

export function App(): React.JSX.Element {
    
  
    return(
        <>
        <SideMenu />
       <Routes>
           <Route path="/" Component={Dashboard}></Route> 
            <Route path="/react-jsx" Component={ReactJSX}></Route>
          <Route path="/components" Component={Components}></Route> 
           {/* {selectedLink === 'events' && <Route path="/events" Component={Events}></Route>} 
           {selectedLink === 'lists' && <Route path="/lists" Component={Lists}></Route>} 
           {selectedLink === 'forms' && <Route path="/forms" Component={Forms}></Route>} 
           {selectedLink === 'router' && <Route path="/router" Component={Router}></Route>} 
           {selectedLink === 'styling' && <Route path="/styling" Component={Styling}></Route>} 
           {selectedLink === 'use_state' && <Route path="/use_state" Component={UseState}></Route>}
           {selectedLink === 'use_effect' && <Route path="/use_effect" Component={UseEffect}></Route>}
           {selectedLink === 'use_ref' && <Route path="/use_ref" Component={UseRef}></Route>}
           {selectedLink === 'use_memo' && <Route path="/use_memo" Component={UseMemo}></Route>}
           {selectedLink === 'use_reducer' && <Route path="/use_reducer" Component={UseReducer}></Route>}
           {selectedLink === 'use_context' && <Route path="/use_context" Component={UseContext}></Route>} */}
           {/* {selectedLink === 'jsx' && <Route path="/react-jsx" Component={ReactJSX}></Route>}
           {selectedLink === 'jsx' && <Route path="/react-jsx" Component={ReactJSX}></Route>}
           {selectedLink === 'jsx' && <Route path="/react-jsx" Component={ReactJSX}></Route>}
           {selectedLink === 'jsx' && <Route path="/react-jsx" Component={ReactJSX}></Route>}
           {selectedLink === 'jsx' && <Route path="/react-jsx" Component={ReactJSX}></Route>}  */}
            </Routes>
            </>
    )
}