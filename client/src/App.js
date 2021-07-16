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
        <Container fluid>{children}</Container>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/posts">
          <Layout>
            <Posts />
          </Layout>
        </Route>
        <Route exact path="/analytics">
          <Layout>
            <Analytics />
          </Layout>
        </Route>
        <Route exact path="/comments">
          <Layout>
            <Comments />
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;

// Dashboard component is an entry component
