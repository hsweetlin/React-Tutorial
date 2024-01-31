import React, { useReducer, useState } from "react"
import { Route, Router, Routes } from "react-router-dom"
import { SideMenu } from "./components/SideMenu/SideMenu"
import { Dashboard } from "./components/Dashboard/Dashboard"
import { ReactJSX } from "./components/ReactJsx/ReactJSX";
import { Components } from "./components/ReactComponents/Components";
import { Events } from "./components/Events/Events";
import { Lists } from "./components/Lists/Lists";
import { Forms } from "./components/Forms/Forms";
import { UseContext } from "./components/Hooks/UseContext/UseContext";
import { UseEffect } from "./components/Hooks/UseEffect/UseEffect";
import { UseMemo } from "./components/Hooks/UseMemo/UseMemo";
import { UseReducer } from "./components/Hooks/UseReducer/UseReducer";
import { UseRef } from "./components/Hooks/UseRef/UseRef";
import { UseState } from "./components/Hooks/UseState/UseState";
import { Styling } from "./components/Styling/Styling";
import { RouterFC } from "./components/Router/Router";

export function App(): React.JSX.Element {


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