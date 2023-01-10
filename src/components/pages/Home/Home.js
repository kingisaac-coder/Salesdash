import React from "react";
import Charts from "../../chart/Charts";
import FeaturedIno from "../../FeaturedInfo/FeaturedIno";
import "./Home.css";
import { userData } from "../../dummyData";
import WidgetsSm from "../../WidgetSM/WidgetsSm";
import WidgetsLg from "../../WidgetsLg/WidgetsLg";

function Home() {
  return (
    <div className="home">
      <FeaturedIno />
      <Charts
        data={userData}
        title="User Anayltics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetsSm />
        <WidgetsLg />
      </div>
    </div>
  );
}

export default Home;
