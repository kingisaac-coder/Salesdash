import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./FeaturedIno.css";
import { ArrowUpward } from "@mui/icons-material";

function FeaturedIno() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> $2,495 </span>
          <span className="featuredMoneyRate">
            -11.43 <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> $4,195 </span>
          <span className="featuredMoneyRate">
            -11.43 <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> $2,495 </span>
          <span className="featuredMoneyRate">
            1.43 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedIno;
