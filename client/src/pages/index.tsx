import React from "react"
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/Dashboard/Dashboard"
import { Events } from "../components/Events/Events"
import { Forms } from "../components/Forms/Forms"
import { UseContext } from "../components/Hooks/UseContext/UseContext"
import { UseEffect } from "../components/Hooks/UseEffect/UseEffect"
import { UseMemo } from "../components/Hooks/UseMemo/UseMemo"
import { UseReducer } from "../components/Hooks/UseReducer/UseReducer"
import { UseRef } from "../components/Hooks/UseRef/UseRef"
import { UseState } from "../components/Hooks/UseState/UseState"
import { Lists } from "../components/Lists/Lists"
import { Components } from "../components/ReactComponents/Components"
import { ReactJSX } from "../components/ReactJsx/ReactJSX"
import { RouterFC } from "../components/Router/Router"
import { SideMenu } from "../components/SideMenu/SideMenu"
import { Styling } from "../components/Styling/Styling"


export function Pages(): React.JSX.Element {


    return (
        <>
            <SideMenu />
            <Routes>
                <Route path="/" Component={Dashboard}></Route>
                <Route path="/react-jsx" Component={ReactJSX}></Route>
                <Route path="/components" Component={Components}></Route>
                <Route path="/events" Component={Events}></Route>
                <Route path="/lists" Component={Lists}></Route>
                <Route path="/forms" Component={Forms}></Route>
                <Route path="/router" Component={RouterFC}></Route>
                <Route path="/styling" Component={Styling}></Route>
                <Route path="/use_state" Component={UseState}></Route>
                <Route path="/use_effect" Component={UseEffect}></Route>
                <Route path="/use_ref" Component={UseRef}></Route>
                <Route path="/use_memo" Component={UseMemo}></Route>
                <Route path="/use_reducer" Component={UseReducer}></Route>
                <Route path="/use_context" Component={UseContext}></Route>
                
            </Routes>
        </>
    )
}