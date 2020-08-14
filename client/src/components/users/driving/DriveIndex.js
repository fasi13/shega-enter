import React from "react";


import Drive from "./examples/Drive.js";
import DriveNavbar from "components/Navbars/DriveNavbar.js";

function DriveIndex() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <DriveNavbar />
      <div className="wrapper">
        <Drive />
        <div className="main">
        </div>
      </div>
    </>
  );
}

export default DriveIndex;
