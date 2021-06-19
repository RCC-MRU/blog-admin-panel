import { Fragment, useState } from "react";
import LeftPanel from "./DashboardComponents/LeftPanel";
import { TabContent, TabPane } from "reactstrap";

import Posts from "./Posts";
import Analytics from "./Analytics";
import Comments from "./Comments";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("1");



  return (
    <Fragment>
      <div className="container-fluid">
        <div className="border-shadow-box">
          <div className="row">
            <div className="d-none d-md-block col-md-3 col-lg-2">
              <LeftPanel activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="col-md-9 col-lg-10">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Posts />
                </TabPane>
                <TabPane tabId="2">
                  <Analytics />
                </TabPane>
                <TabPane tabId="3">
                  <Comments />
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
