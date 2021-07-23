import Comments from "./Components/Comments";
import Analytics from "./Components/Analytics";
import Posts from "./Components/Posts";
import { Redirect, Switch, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import LeftPanel from "./Components/DashboardComponents/LeftPanel";
import { Container } from "reactstrap";

const Layout = ({ children }) => {
  return (
    <>
      <div className="d-flex">
        <LeftPanel />
        {/* <Container fluid>{children}</Container> */}
      </div>
    </>
  );
};

function App() {
  return (
    < >
      <div className="container-fluid back">
        <div className="row">
          <div className="col-3 bg-white my-3 ms-5 me-1 cont ">
            <Layout />
          </div>
          <div className="col-8 bg-white my-3 ps-3 ms-4 me-4 cont">
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
