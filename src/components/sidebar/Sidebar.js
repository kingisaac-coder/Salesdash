import React from "react";
import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import BarChartIcon from "@mui/icons-material/BarChart";
import PaidIcon from "@mui/icons-material/Paid";
import StoreIcon from "@mui/icons-material/Store";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReportIcon from "@mui/icons-material/Report";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" /> Home
            </Link>
            <Link to="/" className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" /> Analytics
            </Link>
            <Link to="/" className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" /> Sales
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="sidebarListItem ">
              <PermIdentityIcon className="sidebarIcon" /> Users
            </Link>
            <Link to="/products" className="sidebarListItem">
              <StoreIcon className="sidebarIcon" /> Products
            </Link>
            <li className="sidebarListItem">
              <PaidIcon className="sidebarIcon" /> Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutlineIcon className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon" /> Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" /> Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <ManageAccountsIcon className="sidebarIcon" /> Manage Account
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon" /> Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
