import './App.css';
import { Menu } from './components/Menu';
import { TopHeader } from './components/TopHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Menu> </Menu>
        <TopHeader> </TopHeader>
      </header>
      <main> 
      </main>
    </div>
  );
}

export default App;
