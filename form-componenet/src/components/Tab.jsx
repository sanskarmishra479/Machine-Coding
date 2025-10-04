import { useState } from "react";
import { Intrest } from "./Intrest";
import { Profile } from "./Profile";
import { Settings } from "./Settings";


export const Tab = () => {
    const tabs = [
    { label: "Profile", component: Profile },
    { label: "Intrest", component: Intrest },
    { label: "Settings", component: Settings },
  ];
  const [ActiveTab , SetActiveTab] = useState(0);

  const ActiveTabComponents = tabs[ActiveTab].component;
  return (
    <>
      {tabs.map((tab, index) => (
        <button className="tab-button" key={index} onClick={()=> SetActiveTab(index)}>{tab.label}</button>
      ))}
    <div className="form">
      <ActiveTabComponents /> 
    </div>
    </>
  );
};
