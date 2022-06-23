import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../Images/originalLogo.png";
import {
  ExpandMore,
  PostAdd,
  ImportExport,
  ListAlt,
  Dashboard,
  People,
} from "@mui/icons-material";
import { TreeView, TreeItem } from "@mui/lab";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Tradetional" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <Dashboard /> Dashboard
        </p>
      </Link>
      <a href="#">
        <TreeView
          defaultCollapseIcon={<ExpandMore />}
          defaultExpandIcon={<ImportExport />}
        >
          <TreeItem nodeId="1" label="Products">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<PostAdd />} />
            </Link>
            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<PostAdd />} />
            </Link>
          </TreeItem>
        </TreeView>
      </a>
      <Link to="/admin/orders">
        <p>
          <ListAlt /> Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <People /> Users
        </p>
      </Link>
      {/* <Link to="/admin/reviews">
        <p>
          <RateReview /> Reviews
        </p>
      </Link> */}
    </div>
  );
};

export default Sidebar;
