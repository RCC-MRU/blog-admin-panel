// import logo from './logo.svg';
import Dashboard from './Components/Dashboard'
import Comments from './Components/Comments'
import Analytics from './Components/Analytics'
import Posts from './Components/Posts'
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Comments/>
      <Analytics />
      <Posts />
    </div>
  );
}

export default App;
