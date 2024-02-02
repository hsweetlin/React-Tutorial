import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './SideMenu.scss'


export const SideMenu: React.FC = () => {
  const location = useLocation();

  return (
    <nav className='side-menu'>

      <ul className="menu-list">
        <h1 className="dashboard-heading">React Tutorial</h1>
        <li className={location.pathname === '/' ? 'selected' : ''}
        > <Link to={"/"} className="menu-link">Introduction</Link></li>
        <li className={location.pathname === '/react-jsx' ? 'selected' : ''}
        > <Link to={"/react-jsx"} className="menu-link">React JSX</Link></li>
        <li className={location.pathname === '/components' ? 'selected' : ''}>
          <Link to={"/components"} className="menu-link">Components</Link></li>
        <li className={location.pathname === '/events' ? 'selected' : ''}>
          <Link to={"/events"} className="menu-link">Events</Link></li>
        <li className={location.pathname === '/lists' ? 'selected' : ''}>
          <Link to={"/lists"} className="menu-link">Lists</Link></li>
        <li className={location.pathname === '/forms' ? 'selected' : ''}>
          <Link to={"/forms"} className="menu-link">Forms</Link></li>
        <li className={location.pathname === '/router' ? 'selected' : ''}>
          <Link to={"/router"} className="menu-link">Router</Link></li>
        <li className={location.pathname === '/styling' ? 'selected' : ''}>
          <Link to={"/styling"} className="menu-link">React Styling</Link></li>
        <h1>React Hooks</h1>
        <li className={location.pathname === '/use_state' ? 'selected' : ''}>
          <Link to={"/use_state"} className="menu-link">useState</Link></li>
        <li className={location.pathname === '/use_effect' ? 'selected' : ''}>
          <Link to={"/use_effect"} className="menu-link">useEffect</Link></li>
        <li className={location.pathname === '/use_ref' ? 'selected' : ''}>
          <Link to={"/use_ref"} className="menu-link">useRef</Link></li>
        <li className={location.pathname === '/use_memo' ? 'selected' : ''}>
          <Link to={"/use_memo"} className="menu-link">useMemo</Link></li>
        <li className={location.pathname === '/use_reducer' ? 'selected' : ''}>
          <Link to={"/use_reducer"} className="menu-link">useReducer</Link></li>
        <li className={location.pathname === '/use_context' ? 'selected' : ''}>
          <Link to={"/use_context"} className="menu-link">useContext</Link></li>
        <h1>Miscellaneous</h1>
        <li className={location.pathname === '/react_icons' ? 'selected' : ''}>
          <Link to={"/react_icons"} className="menu-link">React-icons</Link></li>
      </ul>
    </nav>
  )
}