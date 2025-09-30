export const Tab = () => {
  const tabs = ["Profile", "Intrest", "settings"];

  return (
    <>
      {tabs.map((tab, index) => (
        <button className="tab-button" key={index}>{tab}</button>
      ))}
    </>
  );
};
