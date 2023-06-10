import YourImage from './YourImage';
import './App.css';
import SearchArt from './Search';
import DisplayStare from './EndCreation';

function App() {
  return (
    <div className="App">
      <h1>Let Me Gif What I Want</h1>  
      <p>Whether or not you can skip a day of school/work/whatever to . . . . please recreate your own profound stare into the artistic ether. You may follow in Cameron's footsteps and get lost in dots, or browse other paintings from the Art Institute of Chicago.</p>
      <YourImage />
      <SearchArt />
      <DisplayStare />

      <p>Images courtesy of The Art Institute of Chicago® <br />www.artic.edu</p>
    </div>
  );
}

export default App;
