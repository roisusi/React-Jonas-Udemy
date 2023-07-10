import './App.css';
import Avatar from './Components/Avatar';
import Intro from './Components/Intro';
import SkillList from './Components/SkillList';
function App() {
  return (
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
  );
}

export default App;
