// import logo from './logo.svg';
import Dashboard from "./Components/Dashboard";
import Comments from "./Components/Comments";
import Analytics from "./Components/Analytics";
import Posts from "./Components/Posts";
import { Redirect, Switch, BrowserRouter, Route } from "react-router-dom";

import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Dashboard />}></Route>
        <Route exact path="/posts" component={() => <Posts />}></Route>
        <Route exact path="/analytics" component={() => <Analytics />}></Route>
        <Route exact path="/comments" component={() => <Comments />}></Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// Dashboard component is an entry component
