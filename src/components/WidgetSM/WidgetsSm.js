import React from "react";
import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

function WidgetsSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joined Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="web developer"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kelly</span>
            <span className="widgetSmUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="web developer"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">James Kun</span>
            <span className="widgetSmUserTitle">Accountant</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/5067208/pexels-photo-5067208.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="web developer"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jenny K.</span>
            <span className="widgetSmUserTitle">Accountant</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=zVcDnGEyoHJXgsIVBLapEoAqNEr9nUlmooClC5j_218="
            alt="web developer"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kim J.</span>
            <span className="widgetSmUserTitle">Digital Marketer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/6974791/pexels-photo-6974791.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="web developer"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">King I.</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/4100670/pexels-photo-4100670.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="web developer"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tom Sam</span>
            <span className="widgetSmUserTitle">FX Trader</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetsSm;
