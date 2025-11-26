import { useState } from "react";
import "./Sidebar.css";
function Sidebar() {
  let [sidebarState, setSidebarState] = useState(true); // true == open and false == close
  return (
    <div className="sidebar_main_container">
      <div
        className={`sidebar ${sidebarState ? "sidebar-open" : "sidebar-close"}`}
      >
        {sidebarState && (
          <ul className="list-container">
            <li
              onClick={() => {
                setSidebarState(false);
              }}
            >
              {"<"}
            </li>
            <li>Home</li>
            <li>About</li>
            <li>Settings</li>
          </ul>
        )}

        {!sidebarState && (
          <ul className="list-container">
            <li
              onClick={() => {
                setSidebarState(true);
              }}
            >
              {">"}
            </li>
            <li>H</li>
            <li>A</li>
            <li>S</li>
          </ul>
        )}
      </div>
      <div className="main_content">this is main content</div>
    </div>
  );
}
export default Sidebar;

/**so transform is like moving element or rotation etc.. and transition tells how to do that process slowly quickly etc.. */
