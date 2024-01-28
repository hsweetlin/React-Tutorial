import React from "react";
import { Link } from "react-router-dom";
import '../Dashboard/Dashboard.scss';
export function Dashboard(){
    return(
        <div className="dashboard-container">
        <nav id='side_menu'>
            
        <ul className="menu-list">
          <h1 className="dashboard-heading">React Tutorial</h1>
           <li> <Link to={"/intro"} className="menu-link">Introduction</Link></li>
           <li> <Link to={"/react-jsx"} className="menu-link">React JSX</Link></li>
           <li> <Link to={"/components"} className="menu-link">Components</Link></li>
           <li> <Link to={"/events"} className="menu-link">Events</Link></li>
           <li> <Link to={"/lists"} className="menu-link">Lists</Link></li>
           <li> <Link to={"/forms"} className="menu-link">Forms</Link></li>
           <li> <Link to={"/router"} className="menu-link">Router</Link></li>
           <li> <Link to={"/styling"} className="menu-link">React Styling</Link></li>
           <h1>React Hooks</h1>
           <li> <Link to={"/use_state"} className="menu-link">useState</Link></li>
           <li> <Link to={"/use_effect"} className="menu-link">useEffect</Link></li>
           <li> <Link to={"/use_ref"} className="menu-link">useRef</Link></li>
           <li> <Link to={"/use_memo"} className="menu-link">useMemo</Link></li>
           <li> <Link to={"/use_reducer"} className="menu-link">useReducer</Link></li>
           <li> <Link to={"/use_context"} className="menu-link">useContext</Link></li>
           
         </ul>
        </nav>
        <div id='middle_container'>
<h1>Introduction</h1>
        </div>
        </div>
    )
}