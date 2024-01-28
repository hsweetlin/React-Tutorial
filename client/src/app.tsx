import React from "react"
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./components/Dashboard/Dashboard"
import { ReactJSX } from "./components/ReactJsx/ReactJSX"

export function App(): React.JSX.Element {
    return(
       <Routes>
           <Route path="/" Component={Dashboard}></Route> 
           <Route path="/react-jsx" Component={ReactJSX}></Route> 
           {/* <Route path="/" Component={}></Route>  */}
            </Routes>
    )
}