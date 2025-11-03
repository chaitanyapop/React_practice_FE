import { useState } from "react";
import "./TabSwitch.css";
function TabSwitch() {
  //   let [tabs, setTabs] = useState([
  //     { tabName: "Home", selected: true },
  //     { tabName: "Profile", selected: false },
  //     { tabName: "Settings", selected: false },
  //   ]);
  //   function handleTabSwitch(data: any) {
  //     setTabs((prevState) => {
  //       return prevState.map((prevData) => {
  //         return prevData.tabName === data
  //           ? { ...prevData, selected: true }
  //           : { ...prevData, selected: false };
  //       });
  //     });
  //   }
  let [tabs, setTabs] = useState(["Home", "Profile", "Settings"]);
  let [activeTab, setActiveTab] = useState("Home");

  function handleTabSwitch(data: any) {
    setActiveTab(data);
  }
  return (
    <div className="tab-switch-container">
      <h2>Tab Switcher</h2>
      <div className="tab-list">
        {tabs.map((data, idx) => {
          return (
            <span
              onClick={() => {
                handleTabSwitch(data);
              }}
              key={idx}
              className={activeTab == data ? "tab active" : "tab"}
            >
              {data}
            </span>
          );
        })}
      </div>
      <div>
        {activeTab == "Home" && <p>Displaying Home page</p>}
        {activeTab == "Profile" && <p>Displaying Profile page</p>}
        {activeTab == "Settings" && <p>Displaying Settings page</p>}
      </div>
    </div>
  );
}

export default TabSwitch;
