import React, { useState } from "react";
import "./HomeScreen.css";
import myImage from "./heart.png";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("tab-A");
  const navigate = useNavigate();

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleButtonCLick = () => {
    navigate("/calendar");
  };

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="HomeScreen_container">
      <div className="title-bar title-bar2">
        {!isAuthenticated ? (
          // Show login button if the user is not authenticated
          <button onClick={() => loginWithRedirect()}>Login</button>
        ) : (
          // Show logout button if the user is authenticated
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        )}
      </div>
      <div className="HomeScreen_container2">
        <div className="window" style={{ width: "700px" }}>
          <div className="title-bar title-bar3">
            <div className="title-bar-text">Welcome To:</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <img src={myImage} className="heart-image"></img>
            <p>
              <span className="root-text">Root</span> &{" "}
              <span className="reach-text">Reach</span>
            </p>
            <img src={myImage} className="heart-image"></img>
          </div>
        </div>
        <section className="tabs" style={{ maxWidth: "500px" }}>
          <menu role="tablist" aria-label="Sample Tabs" className="tab-menu">
            <button
              role="tab"
              aria-selected={activeTab === "tab-A"}
              aria-controls="tab-A"
              onClick={() => handleTabClick("tab-A")}
            >
              About Us
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "tab-B"}
              aria-controls="tab-B"
              onClick={() => handleTabClick("tab-B")}
            >
              Creators
            </button>
          </menu>
          <article role="tabpanel" id="tab-A" hidden={activeTab !== "tab-A"}>
            <p className="text-title2">What We Are</p>
            <p className="about">
              Root & Connect is a hollistic web application designed to support
              student mental health, activism, and advocacy. Our mission is
              simple: "Help yourself, help others."
            </p>
          </article>
          <article role="tabpanel" id="tab-B" hidden={activeTab !== "tab-B"}>
            <p className="text-title">Who We Are</p>
            <p className="about">
              Alejandro Gonzalez, Gael Garcia, John Lewis, Hector Cruz
            </p>
            <p>
              Read more at{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role"
                target="_blank"
              >
                MDN Web docs - ARIA: tab role
              </a>
            </p>
          </article>
          <button onClick={handleButtonCLick}>Calendar</button>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
