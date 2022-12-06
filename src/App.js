import './App.css';
import Sidebar from './components/Sidebar'
import Header from './components/Header';
import Display from './components/Display';


function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Display />
    </div>
  );
}

export default App;
