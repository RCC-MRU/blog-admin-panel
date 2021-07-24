import Comments from "./Components/Comments";
import Analytics from "./Components/Analytics";
import Posts from "./Components/Posts";
import { Redirect, Switch, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import LeftPanel from "./Components/DashboardComponents/LeftPanel";

function App() {
  return (
    <>
      <div className="container-fluid" style={{ width: '95%' }}>
        <div className="row">
          <div className="col-md-2 bg-white my-4 cont h-100">
            <LeftPanel />
          </div>
          <div className="col-md-1 d-none d-md-block p-0"></div>
          <div className="col-md-9 bg-white my-4 cont">
            <Switch>
              <Route exact path="/posts">
                <Posts />
              </Route>
              <Route exact path="/analytics">
                <Analytics />
              </Route>
              <Route exact path="/comments">
                <Comments />
              </Route>
              <Route>
                <Redirect to="/posts" />
              </Route>
            </Switch>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;

// Dashboard component is an entry component
