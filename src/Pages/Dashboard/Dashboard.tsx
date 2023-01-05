import { FunctionComponent } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PercentageCard from "../../Components/PercentageCard/PercentageCard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Dashboard.css";
const Dashboard: FunctionComponent = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="right-part">
        <Navbar />
        <div className="cards-list">
          <PercentageCard
            percentage={45}
            cardColor="#A162F7"
            textColor="#FFFFFF"
            circleColor="#FFFFFF"
            title="Energy"
            iconName="Energy"
          />
          <PercentageCard
            percentage={60}
            cardColor="#FFFFFF"
            textColor="#000000"
            circleColor="#FF7E86"
            title="Range"
            iconName="Range"
          />
          <PercentageCard
            percentage={9}
            cardColor="#FFFFFF"
            textColor="#000000"
            circleColor="#A162F7"
            title="Break Fluid"
            iconName="Breakfluid"
          />
          <PercentageCard
            percentage={25}
            cardColor="#FFFFFF"
            textColor="#000000"
            circleColor="#F6CC0D"
            title="Tier Water"
            iconName="Tierwater"
          />
        </div>
        <div className="statistics"></div>
        <div className="recommendations"></div>
      </div>
    </div>
  );
};

export default Dashboard;
